const crypto = require("crypto")
const express = require("express")
const router = express.Router()
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const sendEmail = require('./../utils/email');




router.post('/email', async (req, res) => {
    const hash = crypto
        .createHash('sha256')
        .update("sdfsdf" + Math.random())
        .digest('hex');

    await sendEmail({
        email: "chenkamin@gmail.com",
        subject: 'Your password reset token (valid for 10 min)',
        message: "sdfdsfdssdf",
        html: `<body>
        <h1>POPO</h1>
        <h4>dssdds</h4>
        <a href="localhost:3000/api/v1/phishing/?token=${hash}">CRYPTO</a>
        </body>`
    });
    res.json("sdf")
});


module.exports = router;