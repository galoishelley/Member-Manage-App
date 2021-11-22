const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const auth = require('../middleware/auth');
var mongoose = require('mongoose');
// var id = mongoose.Types.ObjectId('61972d607dafdab24fa5bd11');
// const mongoose = require('mongoose');
// var Schema = mongoose.Schema;

const Member = require('../models/Member');

//@route GET api/members
//@desc get all members
//@access Private

router.get('/', auth,
    async (req, res) => {
        try {
            const members = await Member.find().sort();
            res.json(members);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    });


//@route GET api/members:id
//@desc get all members
//@access Private

router.get('/:id', auth,
    async (req, res) => {
        try {
            let member = await Member.findById(req.params.id);
            res.json(member);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    });


//@route POST api/members
//@desc add a new members
//@access Private
router.post('/', [
    check('name', 'name is require').not().isEmpty(),
    check('phone', 'phone is require').not().isEmpty(),
    check('email', 'input correct email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, email } = req.body;

    try {
        let member = await Member.findOne({ email });

        if (member) {
            return res.status(400).json({ msg: 'Member already exists' });
        }

        member = new Member({
            name,
            phone,
            email
        });

        await member.save();

        res.json(member);
        // res.send("pass");
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error--users');
    }
});

//@route PUT api/members/:id
//@desc update member
//@access Private
router.put('/:id', auth,
    async (req, res) => {
        const { name, email, phone, reward_id } = req.body;

        let id;
        if (reward_id !== null) {
            id = mongoose.Types.ObjectId(reward_id);
        } else {
            id = null;
        }

        //Build Member object
        const memberFields = {};

        if (name) memberFields.name = name;
        if (email) memberFields.email = email;
        if (phone) memberFields.phone = phone;
        memberFields.reward_id = id;

        try {
            let member = await Member.findById(req.params.id);

            if (!member) return res.status(404).json({ msg: "Memeber not found" });

            member = await Member.findByIdAndUpdate(req.params.id,
                { $set: memberFields },
                { new: true });

            res.json(member);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });


//@route DELETE api/members/:id
//@desc delete member
//@access Private
router.delete('/:id', auth,
    async (req, res) => {

        try {
            let member = await Member.findById(req.params.id);

            if (!member) return res.status(404).json({ msg: "Member not found" });


            await Member.findByIdAndRemove(req.params.id);

            res.json({ msg: "member removed" });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });


module.exports = router;