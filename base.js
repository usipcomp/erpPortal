const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    roll_no: {
        type:  String,
        required: true,
        unique: true
    },
    Name: {
        type:  String,
        required: true,
        unique: false
    }
    ,FatherName: {
        type:  String,
        required: true,
        unique: false
    }
    ,address: {
        type:  String,
        required: true,
        unique: false
    }
    ,mailID: {
        type:  String,
        required: true,
        unique: true
    }
    ,Mobile: {
        type:  String,
        required: true,
        unique: false
    }
    ,Course: {
        type:  String,
        required: true,
        unique: false
    }
    ,branch: {
        type:  String,
        required: true,
        unique: false
    }
    ,AadharNo: {
        type:  Number,
        required: true,
        unique: true
    }
    ,CorrAdress: {
        type:  String,
        required: true,
        unique: false
    }
    ,postalCode: {
        type: Number,
        required: false,
        unique: false
    }
    ,dueFee: {
        type:  Int32Array,
        default : 0,
        unique: false
    }
    ,Nationality: {
        type:  String,
        default :Indian,
        unique: false
    }
    ,Hostel: {
        type:  Boolean,
        default :false,
        unique: false
    }
    ,AnnualIncome: {
        type:  String,
        unique: false
    }
    ,City: {
        type:  String,
        unique: false
    }
    ,Password: {
        type:  String,
        required: true,
        unique: false
    }
});


module.exports = mongoose.model('Student',StudentSchema);
