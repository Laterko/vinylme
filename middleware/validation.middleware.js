const User = require("../model/user.schema");
const Joi = require("joi");

const registerValidation = (data) =>{
    const schema = Joi.object({
        email: Joi.string()
            .min(4)
            .required()
            .email(),
        login: Joi.string()
            .min(4)
            .required(),
        password: Joi.string()
            .min(8)
            .required()
    });
    return schema.validate(data);
};

const loginValidation = (data) =>{
    const schema = Joi.object({
        email: Joi.string()
            .min(4)
            .required()
            .email(),
        password: Joi.string()
            .min(8)
            .required()
    });
    return schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;