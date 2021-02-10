const mongoose = require('mongoose');
const User = require("../model/user.schema");//.UserSchema
const bcrypt = require('bcryptjs');

module.exports.createUser = async (req,res) => {

    const emailCheck = await User.findOne({email: req.body.email});
    if(emailCheck) return res.status(400).send('Email already exists!');

    const salt = await bcrypt.genSaltSync(10);//10 rund
    const hashedPass = bcrypt.hashSync(req.body.password, salt);

    const usr = new User({
        email: req.body.email,
        login: req.body.login,
        password: req.body.hashedPass
    });
    try{
        const savedUser = await usr.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
};