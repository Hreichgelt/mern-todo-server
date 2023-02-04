require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const todoRouter = require('routes/api/todoRoutes.js');
app.use('/todoRoutes', todoRouter)
// 'localhost:3000/todoRoutes'

app.listen(3000, () => {
    console.log('Server running')
});


// 'mongodb://localhost/to-dos'