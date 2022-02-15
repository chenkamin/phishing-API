const express = require("express")
const router = express.Router()
const mongoose = require('mongoose');

const Email = require('../models/emailSchema');

//this route is for insert emp's emails

router.post('/', async (req, res) => {


    const newMail = await Email.create({
        name: 'chen',
        email: 'sdn@gmail.com',
        phishingStatus: 0,

    });
    res.json("added")
})

module.exports = router;

