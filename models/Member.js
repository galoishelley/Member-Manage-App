const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    reward_id: {
        type: String,
        type: Schema.Types.ObjectId,
        ref: "rewards",
        default: null

    }
}, { collection: 'members' });

const Member = module.exports = mongoose.model('member', MemberSchema);
