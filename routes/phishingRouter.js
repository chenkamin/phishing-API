const express = require("express")
const router = express.Router()
const nodemailer = require('nodemailer');

const sendEmail = require('./../utils/email');




router.get('/', async (req, res) => {
    console.log(req.query)
    res.json(req.query)
});


module.exports = router;