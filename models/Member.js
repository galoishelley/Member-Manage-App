const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const MemberSchema = Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'mbreward'
    },
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
    }
});

var Member = mongoose.model('member', MemberSchema);
module.exports = Member;