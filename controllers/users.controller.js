const mongoose = require('mongoose');
const User = require("../model/user.schema");//.UserSchema
const bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
const { loginValidation, registerValidation } = require('../middleware/validation.middleware');

module.exports.createUser = (req,res) => {
    
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //const emailCheck = User.findOne({email: req.body.email});
    //if(emailCheck) return res.status(400).send('Email already exists!!');

    //const salt =  bcrypt.genSalt(10);//10 rund
    //const hashedPass = bcrypt.hash(req.body.password, salt);

    const usr = new User({
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    })
    try{
        const savedUser = usr.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
};

module.exports.login = (req,res) => {

    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const userLogin = User.find({email: req.body.email});
    if(!userLogin) return res.status(400).send('Email not registered');
    //const passValid = bcrypt.compare(req.body.password, userLogin.password);
    //if(!passValid) return res.status(400).send('Invalid password');

    const token = jwt.sign({_id:userLogin._id}, process.env.SECRET_TOKEN)
    res.header('token', token).send(token);
    //res.send('Login successful');

};
