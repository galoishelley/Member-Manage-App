const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Member = require('../models/Member');

//@route GET api/aggregate
//@desc get all aggregate
//@access Private
router.get('/', auth,
    async (req, res) => {
        try {
            // const members = await Member.find({ "reward_id": { "$ne": null } });
            // res.json(members);
            Member.aggregate([
                // {

                //     $unwind: "reward_info"
                // },
                {
                    $lookup:
                    {
                        from: "rewards",
                        localField: "reward_id",
                        foreignField: "_id",
                        as: "reward_info"
                    }
                }, { $match: { "reward_id": { "$ne": null } } },
                {
                    $match: { "reward_info": { $ne: [] } }
                }
                // {
                //     // $unwind: {
                //     //     path: "reward_info",
                //     //     preserveNullAndEmptyArrays: "ture"
                //     // }
                // }
            ]).exec((err, result) => {
                if (err) {
                    console.log("error", err)
                }
                if (result) {
                    res.json(result);
                }
            });
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Server Error");
        }
    });

module.exports = router;