// require('dotenv').config(); - in es6 it becomes the following - imports and then calls function 
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import cors from 'cors'

const port = 8080


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to Database'))

app.use(cors());

app.use(express.json())

app.use('/todo', todoRouter)
// 'localhost:3000/todoRoutes'

app.listen(port, () => {
    console.log('Server running')
});


// 'mongodb://localhost/to-dos'