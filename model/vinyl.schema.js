var mongoose = require("mongoose");

const VinylSchema = new mongoose.Schema(
    {
        album:{
            type: String,
            required: true,
            minlength: 4,
            maxlength: 32
        },
        artist:{
            type: String,
            required: true,
            minlength: 4,
            maxlength: 32
        },
        genre:{
            type: String,
            required: true,
            minlength: 8,
            maxlength: 32
        },
        desc:{
            type: String,
            required: true,
            minlength: 2,
            maxlength: 32
        }
    }
);

module.exports = mongoose.model('vinyl', VinylSchema);