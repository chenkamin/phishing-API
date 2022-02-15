const crypto = require("crypto")
const express = require("express")
const router = express.Router()
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const sendEmail = require('./../utils/email');
const Emails = require('./../models/emailSchema')



router.post('/email', async (req, res) => {
    const { email } = req.body
    console.log(email)
    const hash = crypto
        .createHash('sha256')
        .update(email + Math.random())
        .digest('hex');

    const user = Emails.findOneAndUpdate({ email: email }, { token: hash }, (err, result) => {
        console.log(result)
        sendEmail({
            email: email,
            html: `<body>
        <h1>Happy New Year's</h1>
        <h4>Pleaes check the link to choose your New year's gift</h4>
        <a href="localhost:3000/api/v1/phishing/?token=${hash}&email=${email}">Click Here</a>
        </body>`
        });
        console.log(user)
        res.json("mail sended")
    })
});


module.exports = router;