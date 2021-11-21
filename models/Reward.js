const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const RewardSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { collection: 'rewards' });

const Reward = module.exports = mongoose.model('reward', RewardSchema);