const { Schema, Types } = require('mongoose');

const commentSchema = new Schema({
    commentId: {
        type: Types.ObjectId,
        default: new Types.ObjectId
    },
    commentBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

module.exports = commentSchema;