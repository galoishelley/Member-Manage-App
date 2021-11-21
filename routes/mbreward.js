// const express = require('express');
// const router = express.Router();
// const { body, validationResult, check } = require('express-validator');
// const auth = require('../middleware/auth');

// const Member = require('../models/Member');


// // const Mbreward = require('../models/Mbreward');
// // const Reward = require('../models/Reward').default;


// //@route GET api/mbr_member
// //@desc get all mbr_member
// //@access Private
// router.get('/', auth,
//     async (req, res) => {
//         try {

//             // Mbreward.aggregate([
//             //     {
//             //         $lookup:
//             //         {
//             //             from: "rewards",
//             //             localField: "reward_id",
//             //             foreignField: "_id",
//             //             as: "reward_info"
//             //         }
//             //     },

//             //     { $lookup: { from: 'members', localField: 'member_id', foreignField: '_id', as: 'myloves' } }
//             // ]).exec((err, result) => {
//             //     if (err) {
//             //         console.log("error", err)
//             //     }
//             //     if (result) {
//             //         console.log(result);

//             //         res.json(result);
//             //     }
//             // });

//             // const mbreward = await Mbreward.find().sort();
//             // res.json(mbreward);

//         } catch (err) {
//             console.log(err.message);
//             res.status(500).send("Server Error");
//         }
//     });


// //@route GET api/mbreward
// //@desc get all mbreward
// //@access Private

// router.get('/', auth,
//     async (req, res) => {
//         try {

//             Mbreward.aggregate([
//                 {
//                     $lookup:
//                     {
//                         from: "rewards",
//                         localField: "reward_id",
//                         foreignField: "_id",
//                         as: "reward_info"
//                     }
//                 },

//                 { $lookup: { from: 'members', localField: 'member_id', foreignField: '_id', as: 'myloves' } }
//             ]).exec((err, result) => {
//                 if (err) {
//                     console.log("error", err)
//                 }
//                 if (result) {
//                     console.log(result);

//                     res.json(result);
//                 }
//             });

//             // const mbreward = await Mbreward.find().sort();
//             // res.json(mbreward);

//         } catch (err) {
//             console.log(err.message);
//             res.status(500).send("Server Error");
//         }
//     });

// //@route POST api/mbreward
// //@desc add a new mbreward
// //@access Private
// router.post('/', [
//     check('member_id', 'member_id is require').not().isEmpty(),
//     check('reward_id', 'reward_id is require').not().isEmpty(),
// ], async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { member_id, reward_id } = req.body;

//     try {
//         let member = await Mbreward.findById({ member_id });

//         if (member) {
//             return res.status(400).json({ msg: 'Member already exists' });
//         }

//         let reward = await Mbreward.findById({ reward_id });

//         if (reward) {
//             return res.status(400).json({ msg: 'Reward already exists' });
//         }


//         mbr = new Mbreward({
//             member_id,
//             reward_id
//         });

//         await mbr.save();

//         res.json(mbr);
//         res.send("pass");
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('Server Error--mbreward');
//     }
// });

// //@route PUT api/mbreward/:id
// //@desc update mbreward
// //@access Private
// router.put('/:id', auth,
//     async (req, res) => {
//         const { reward_id } = req.body;

//         //Build Member object
//         const mbrewardFields = {};
//         if (reward_id) memberFields.reward_id = reward_id;

//         try {
//             // let member = await Mbreward.findById(req.params.id);

//             // if (!member) return res.status(404).json({ msg: "Memeber already exits" });

//             let reward = await Mbreward.findById({ reward_id });

//             if (reward) {
//                 return res.status(400).json({ msg: 'Reward already exists' });
//             }

//             member = await Member.findByIdAndUpdate(req.params.id,
//                 { $set: mbrewardFields },
//                 { new: true });

//             res.json(member);
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//         }
//     });


// //@route DELETE api/mbreward/:id
// //@desc delete member
// //@access Private
// router.delete('/:id', auth,
//     async (req, res) => {

//         try {
//             let mbreward = await Mbreward.findById(req.params.id);

//             if (!mbreward) return res.status(404).json({ msg: "Member's reward not found" });


//             await Mbreward.findByIdAndRemove(req.params.id);

//             res.json({ msg: "member's reward removed" });
//         } catch (err) {
//             console.error(err.message);
//             res.status(500).send('Server Error');
//         }
//     });


// module.exports = router;