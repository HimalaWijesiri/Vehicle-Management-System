const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const vehicledetailsSchema = new Schema({

    v_id: {type:String},
    v_name: {type:String},
    date: {type:Date, required:true},
    description: {type:String, required:true},
    amount: {type:String}

})

module.exports = mongoose.model('Details', vehicledetailsSchema)