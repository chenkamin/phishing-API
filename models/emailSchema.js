const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const emailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    phishingStatus: {
        type: Boolean,
        required: true,
        default: false
    },
    token: {
        type: String,
    },

});


const Email = mongoose.model('Email', emailSchema);

module.exports = Email;