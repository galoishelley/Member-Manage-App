const express = require('express');
const router = express.Router();

//@route GET api/members
//@desc get all members
//@access Private
router.get('/', (req, res) => {
    res.send('get members');
});

//@route POST api/members
//@desc add a new members
//@access Private
router.post('/', (req, res) => {
    res.send('add a new member');
});

//@route PUT api/members/:id
//@desc update member
//@access Private
router.put('/:id', (req, res) => {
    res.send('update member');
});

//@route DELETE api/members/:id
//@desc delete member
//@access Private
router.delete('/:id', (req, res) => {
    res.send('delete member');
});


module.exports = router;