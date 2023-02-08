// const router = require('express').Router(); - import express - call express router - then assign express.router to the variable router

import express from 'express'
const router = express.Router();
import todoModel from '../models/todo.js'

// for individual routes - 
// Get all
router.get('/', async (req, res) => {
// test get route 

})

// get one 
router.get('/:id', (req, res) => {
res.send(req.params.id)
})

// create to-do one at a time https://localhost:3000/todo
router.post('/', async (req, res) => {
    const todo = new todoModel({
        title: 'Banger',
        description: 'shred the gnar'
    });

    await todo.save();

    res.send('hotboggies')
})

// delete one at a time 
router.delete('/:id', (req, res) => {

})
// not implementing update yet
// use Insomnia to test 
// check db from compass to see db changes 
// test endpoints 


export default router;