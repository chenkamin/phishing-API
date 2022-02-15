const express = require('express');
const app = express();
const authRouter = require('./routes/authRouter')
const emailRouter = require('./routes/emailRouter')
const phishingRouter = require('./routes/phishingRouter')
const cors = require('cors');

const data = require('./routes/data')
const { protect } = require('./middlewares/protect')



app.use(express.json({ limit: '10kb' }));
app.use(cors())


//routes
app.use('/sanity', (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/users', authRouter);
app.use('/api/v1/', protect, emailRouter);
app.use('/api/v1/phishing', phishingRouter);
app.use('/api/v1/data', data); //route for inserting emp's data.

app.all('*', (req, res, next) => {
    next(res.status(404).json({ message: "route not exists" }));
});

module.exports = app;