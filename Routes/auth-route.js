const router = require('express').Router();
const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const Vehicles = require('../models/vehicles');
const Details = require('../models/vehicle-details-scheme');


//Register as  User
router.post('/register',(req, res)=>{
    bcrypt.hash(req.body.password, 10,(err, hash)=>{
        if(err){
            return res.json({success:false, message:" Hash Error! "})
        }else{
            const user = new User({
                firstname:req.body.firstname,
                surname:req.body.surname,
                email:req.body.email,
                password:hash,
                })
            
                user.save()
                .then((_)=>{
                    res.json({success:true, message:" Account has been Created! "})
                })
                .catch((err)=>{
                    if(err.code=11000){
                        res.json({success: false, message: " Email already exists! "})
                    }
                    res.json({success:false, message: "Authentication Failed!"})
                })
            }
        });
    }

)

// User Authentication usin JWT & Bcrypt Password
router.post('/login', (req, res) => {
    User.find({email:req.body.email}).exec().then((result)=>{
        if(result.length < 1){
            return res.json({success: false, message:" User Not Found! "})
        }
        const user = result[0];
        bcrypt.compare(req.body.password, user.password, (err, ret)=>{
            if(ret){
                const playload ={
                    userId: user._id
                }
                const token =  jwt.sign(playload, "webBatch")
                return res.json({success:true, token:token, message:"Login Successful!"})
            }else{
                return res.json({success:false, message:" Incorrect Password. Please Try Again! "})
            }
        })
    }).catch(err =>{
        res.json({success: false, message:" Authentication Failed! "})
    })
});

// Get Logged in Profile
router.get('/profile', checkAuth,   (req, res)=>{
    const userId =req.userData.userId;
    User.findById(userId).exec().then((result)=>{
        res.json({success:true, data:result})
    }).catch(err=>{
        res.json({success:false, message:" Server Error! "})
    })
})

// Add Vehicles to the System
router.post('/add-vehicle', (req, res)=>{
    const vehicles = new Vehicles({
        vehiclename:req.body.vehiclename,
        model:req.body.model,
        modelnum:req.body.modelnum,
        brand:req.body.brand,
        engcap:req.body.engcap,
        transmission:req.body.transmission,
        yom:req.body.yom,
        mileage:req.body.mileage,
        price:req.body.price,
    
        })
    
        vehicles.save()
        .then((_)=>{
            res.json({success:true, message:" Vehicle Added! "})
        })
        .catch((err)=>{
            if(err.code=11000){
                res.json({success: false, message: " Vehicle Already exists! "})
            }
            res.json({success:false, message: "Authentication Failed!"})
        })
})

//View Vehicle list
router.route('/').get((req,res)=>{
    Vehicles.find((error,data)=>{
        if(error) {
            return next(error) 
        } else{
            res.json(data)
        }
    })
})

//View last 4 Vehicles in db 
router.route('/latest-vehicles').get((req,res)=>{
    Vehicles.find((error,data)=>{
        if(error) {
            return next(error) 
        } else{
            res.json(data)
        }
    }).sort({_id: -1}).limit(4);
})

//Delete Vehicles by Id
router.route('/del-vehicle/:id').delete((req, res, next)=> {
    Vehicles.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
        return next(error);
    }
    else {res.json('Vehicle Deleted Successfully');}
    });
   });

// To Get Vehicle Details By Vehicle ID
router.route('/edit-vehicle/:id').get(function (req, res) {
    let id = req.params.id;
    Vehicles.findById(id, function (err, vehicle) {
    res.json(vehicle);
    });
   });

// To Update The Vehicle Details
router.route('/update-vehicle/:id').put((req, res, next) => {
    Vehicles.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })

 // Add Vehicle-Details to the System
router.post('/add-vehicle-details', (req, res)=>{
    const details = new Details({
        v_id:req.body.v_id,
        v_name:req.body.v_name,
        date:req.body.date,
        description:req.body.description,
        amount:req.body.amount
    
        })
    
        details.save()
        .then((_)=>{
            res.json({success:true, message:" Details Added! "})
        })
        .catch((err)=>{
            if(err.code=11000){
                res.json({success: false, message: " Details Already exists! "})
            }
            res.json({success:false, message: "Authentication Failed!"})
        })
}) 

//Get Vehicle-Details list
router.route('/details').get((req,res)=>{
    Details.find((error,data)=>{
        if(error) {
            return next(error) 
        } else{
            res.json(data)
        }
    })
})

// Get Vehicle-Details with same id
router.route('/details/view-details/:id').get(function (req, res) {
    let id = req.params.id;
    Details.find({v_id: id},function (err, details) {
    res.json(details);
    });
   });

//Delete Vehicle Detail records by ID
router.route('/del-detail/:id').delete((req, res, next)=> {
    Details.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
        return next(error);
    }
    else {res.json('Record Deleted Successfully');}
    });
   });

// Get Vehicle Detail Records by id to update
router.route('/edit-vehicle-detail-records/:id').get(function (req, res) {
    let id = req.params.id;
    Details.findById(id, function (err, detail) {
    res.json(detail);
    });
   });


// To Update The Vehicle Detail Records
router.route('/update-vehicle-records/:id').put((req, res, next) => {
    Details.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Record updated successfully')
      }
    })
  })
module.exports = router