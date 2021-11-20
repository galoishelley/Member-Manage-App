const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MbrewardSchema = Schema({
    member_id: {
        type: String,
        required: true,
        ref: 'member'
    },
    reward_id: {
        type: String,
        required: true,
        ref: "reward"
    }
});

var Mbreward = mongoose.model('mbreward', MbrewardSchema);
module.exports = Mbreward;