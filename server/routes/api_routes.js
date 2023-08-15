const router = require('express').Router();
const Article = require('../models/Article');
// Logic for filtering articles by keywords here
// $text $search

router.get('/articles', async (req, res) => {

    try {

        const articles = await Article.find();

        if (articles.length === 0) {
            return res.status(404).json({ message: 'No articles found with those keywords' });
        }

        res.json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching articles' });
    }
})

// Add a comment to an article
// localhost:3333/api/articles/:articleId
router.post('/articles/:articleId', async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(
            req.params.articleId,
            { $addToSet: { comments: req.body } },
            { runValidators: true, new: true });
        if (!article) {
            res.status(404).json({ "message": "No comment found with that id" });
        }
        res.json(article);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// Delete a comment 
// localhost:3333/api/articles/:articleId/:commentId
router.delete('/articles/:articleId/:commentId', async (req, res) => {
    try {
        const article = await Article.findOneAndUpdate(
            {
                _id: req.params.articleId
            },
            {
                $pull: {
                    comments: {
                        commentId: req.params.commentId
                    }
                }
            },
            { new: true }
        );
        if (!article) {
            res.status(404).json({ "message": "cannot delete - no comment found with that id" });
        }
        res.json({ message: 'Comment deleted successfully' });
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});


module.exports = router;
