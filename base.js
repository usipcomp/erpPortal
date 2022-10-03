const BaseUser = new Schema({
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
    ,adress: {
        type:  String,
        required: true,
        unique: true
    }
    ,mailID: {
        type:  String,
        required: true,
        unique: true
    }
    ,Mobile: {
        type:  String,
        required: true,
        unique: true
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
        type:  String,
        required: true,
        unique: true
    }
    ,CorrAdress: {
        type:  String,
        required: true,
        unique: true
    }
    ,postalCode: {
        type: String,
        required: false,
        unique: true
    }
    ,feesPaid: {
        type:  Boolean,
        required: true,
        unique: false
    }
    ,dueFee: {
        type:  Int32Array,
        required: true,
        unique: false
    }
    ,Nationality: {
        type:  String,
        required: true,
        unique: false
    }
    ,Hostel: {
        type:  Boolean,
        required: false,
        unique: false
    }
    ,AnnualIncome: {
        type:  String,
        required: true,
        unique: false
    }
    ,City: {
        type:  String,
        required: true,
        unique: false
    }
    ,Password: {
        type:  String,
        required: true,
        unique: true
    }
});