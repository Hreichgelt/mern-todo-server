const router = require('express').Router();

// for individual routes - 
// Get all
router.get('/', async (req, res) => {
// test get route 

})

// get one 
router.get('/:id', (req, res) => {
res.send(req.params.id)
})

// create to-do one at a time 
router.post('/', (req, res) => {
    res.send('hotboggies')
})

// delete one at a time 
router.delete('/:id', (req, res) => {

})
// not implementing update yet
// use Insomnia to test 
// check db from compass to see db changes 
// test endpoints 


module.exports = router