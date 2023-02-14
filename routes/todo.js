// const router = require('express').Router(); - import express - call express router - then assign express.router to the variable router

import express from 'express'
const router = express.Router();
import todoModel from '../models/todo.js'

// for individual routes - 
// Get all
router.route('/').get( (req, res) => {
    todoModel.find((err, todo) => {
        if(err)
            console.log(err);
        else {
            res.json(todo)
        }
    })
})

// get one 
router.route('/:id').get((req, res) => {
    const id = req.params.id;
    todoModel.findById(id, (err, todo) => {
        res.json(todo)
    })
})

// create to-do one at a time https://localhost:3000/todo
router.post('/', async (req, res) => {
    const newTodo = new todoModel();
        newTodo.TodoId = req.body.TodoId;
        newTodo.title = req.body.title;
        newTodo.description = req.body.description;
        newTodo.dueAt = req.body.dueAt;
        newTodo.createdAt = req.body.createdAt;
        newTodo.completedAt = req.body.completedAt;
        newTodo.deletedAt = req.body.deletedAt;

    await newTodo.save();

    res.send('Data Inserted')
});

// delete one at a time 
router.delete('/:id', async (req, res) => {
const todo = await todoModel.deleteOne({
    id: req.params._id
});

res.send('that bitch is deleted!')
})


// not implementing update yet
// use Insomnia to test 
// check db from compass to see db changes 
// test endpoints 


export default router;