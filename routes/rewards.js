const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const auth = require('../middleware/auth');


const Reward = require('../models/Reward');

//@route GET api/rewards
//@desc get all rewards
//@access Private

router.get('/', auth,
    async (req, res) => {
        try {
            const rewards = await Reward.find().sort();
            res.json(rewards);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    });

//@route POST api/rewards
//@desc add a new rewards
//@access Private
router.post('/', [
    check('name', 'name is require').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
        let reward = await Reward.findOne({ name });

        if (reward) {
            return res.status(400).json({ msg: 'reward already exists' });
        }

        reward = new Reward({
            name
        });

        await reward.save();

        res.json(reward);
        // res.send("pass");
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error--users');
    }
});

//@route PUT api/rewards/:id
//@desc update reward
//@access Private
router.put('/:id', auth,
    async (req, res) => {
        const { name } = req.body;

        //Build reward object
        const rewardFields = {};

        if (name) rewardFields.name = name;

        try {
            let reward = await Reward.findById(req.params.id);

            if (!reward) return res.status(404).json({ msg: "Reward not found" });

            reward = await Reward.findByIdAndUpdate(req.params.id,
                { $set: rewardFields },
                { new: true });

            res.json(reward);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });


//@route DELETE api/rewards/:id
//@desc delete reward
//@access Private
router.delete('/:id', auth,
    async (req, res) => {

        try {
            let reward = await Reward.findById(req.params.id);

            if (!reward) return res.status(404).json({ msg: "reward not found" });


            await Reward.findByIdAndRemove(req.params.id);

            res.json({ msg: "reward removed" });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });


module.exports = router;