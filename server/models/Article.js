const { Schema, model } = require('mongoose');

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
    image: {
        type: String
    }
});

articleSchema.index({ title: "text", description: "text" });

const Article = model('Article', articleSchema);

module.exports = Article;