var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            minlength: 4,
            maxlength: 32
        },
        login:{
            type: String,
            required: true,
            minlength: 4,
            maxlength: 32
        },
        password:{
            type: String,
            required: true,
            minlength: 8,
            maxlength: 32
        },
        firstName:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 32
        },
        lastName:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 32
        },
        joinDate:{
            type: Date,
            default: Date.now
        },
        adminUser: Boolean
    }
);

module.exports = mongoose.model('users', UserSchema);
/*
module.exports.UserSchema = UserSchema;
adminUser -> false - zwykly user
              true - admin
brak mozliwosci zrobienia admin konta
*/