const { Schema, model, Types } = require('mongoose');

const articleSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    urlToImage: {
        type: String
    },
    url: {
        type: String
    },
    comments: [{
        type: Types.ObjectId,
        ref: 'Comment'
    }]
});

articleSchema.index({ title: "text", description: "text" });

const Article = model('Article', articleSchema);

module.exports = Article;