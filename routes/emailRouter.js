const express = require("express")
const router = express.Router()
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const sendEmail = require('./../utils/email');




router.post('/email', async (req, res) => {
    await sendEmail({
        email: "chenkamin@gmail.com",
        subject: 'Your password reset token (valid for 10 min)',
        message: "sdfdsfdssdf",
        html:"<body><h1>POPO</h1><h4>dssdds</h4></body>"
    });
    res.json("sdf")
});


module.exports = router;