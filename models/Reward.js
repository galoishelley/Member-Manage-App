const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const RewardSchema = Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'mbreward'
    },
    name: {
        type: String,
        required: true
    }
});

var Reward = mongoose.model('reward', RewardSchema);
module.exports = Reward;