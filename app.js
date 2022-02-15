const express = require('express');
const app = express();
const authRouter = require('./routes/authRouter')
const emailRouter = require('./routes/emailRouter')
const phishingRouter = require('./routes/phishingRouter')
const { protect } = require('./middlewares/protect')
//middleware
//logs







app.use(express.json({ limit: '10kb' }));


//routes
app.use('/sanity', (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/users', authRouter);
app.use('/api/v1/', emailRouter);
app.use('/api/v1/phishing', phishingRouter);

app.use('/api/v1/protect', protect, (req, res) => {
    res.send("pass")
})
app.all('*', (req, res, next) => {
    next(res.status(404).json({ message: "route not exists" }));
});

module.exports = app;