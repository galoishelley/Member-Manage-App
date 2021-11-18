const express = require('express');
const router = express.Router();

//@route GET api/rewards
//@desc get all rewards
//@access Private
router.get('/', (req, res) => {
    res.send('get rewards');
});

//@route POST api/rewards
//@desc add a new rewards
//@access Private
router.post('/', (req, res) => {
    res.send('add a new reward');
});

//@route PUT api/rewards/:id
//@desc update reward
//@access Private
router.put('/:id', (req, res) => {
    res.send('update reward');
});

//@route DELETE api/rewards/:id
//@desc delete reward
//@access Private
router.delete('/:id', (req, res) => {
    res.send('delete reward');
});


module.exports = router;