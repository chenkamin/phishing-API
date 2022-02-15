
const express = require('express');
const app = express();


//middleware
//logs







app.use(express.json({ limit: '10kb' }));


//routes
app.use('/sanity', (req, res) => {
    res.send("hello world")
})


app.all('*', (req, res, next) => {
    next(res.status(404).json({ message: "route not exists" }));
});

module.exports = app;