const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const vehicleSchema = new Schema({

    vehiclename: {type:String, required:true},
    model: {type:String},
    modelnum: {type:String, unique: true},
    brand: {type:String },
    engcap: {type:String },
    transmission: {type:String },
    yom: {type:Date },
    mileage: {type:String },
    price: {type:String},
    
    //collection: 'vehicles'

})

module.exports = mongoose.model('Vehicles', vehicleSchema);