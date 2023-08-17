const { Schema, model, Types } = require('mongoose');

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
    article: {
        type: Types.ObjectId,
        ref: 'Article'
    }

},
    {
        timestamps: true
    }
)

const Comment = model('Comment', commentSchema);

module.exports = Comment;