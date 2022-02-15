const express = require("express")
const router = express.Router()
const nodemailer = require('nodemailer');
const Emails = require('./../models/emailSchema')

const sendEmail = require('./../utils/email');




router.get('/', async (req, res) => {
    console.log(req.query)
    const user = Emails.findOneAndUpdate({ email: req.query.email }, { phishingStatus: 1 }, (err, result) => {
        console.log(result)
        res.json("we stole all your money and passwords")
    });
})


module.exports = router;