const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Member = require('../models/Member');


//@route GET api memb_null
//@desc get all memb_null
//@access Private
router.get('/', auth,
    async (req, res) => {
        try {
            var members = await Member.find({ "reward_id": { "$eq": null } });

            res.json(members);

        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    });


//@route GET api/memb_null:id
//@desc get all memb_null
//@access Private

router.get('/:id', auth,
    async (req, res) => {
        var data = {
            "reward_id": {
                "$eq": req.params.id,
            }
        };

        try {
            let member = await Member.find(data);
            res.json(member);
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    });


module.exports = router;