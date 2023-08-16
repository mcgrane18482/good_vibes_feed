const router = require('express').Router();
const Article = require('../models/Article');
const User = require('../models/User');
const { createToken, validateToken } = require("../auth");

async function isAuthenticated(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) throw new Error("You are not authorized to perform that action.");

        const data = await validateToken(token);

        const user = await User.findById(data.user_id);

        req.user = user;

        next();
    }
    catch (err) {
        return res.status(401).send({
            error: true,
            message: err.message
        });
    }
}

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

// Get a single article by Id
// localhost:3333/api/articles/:articleId
router.get('/articles/:articleId', async (req, res) => {
    try {
        const article = await Article.findById(req.params.articleId)
        if (!article) {
            res.status(404).json({ "message": "No comment found with that id" });
        }
        res.json(article);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

// Add a comment to an article
// localhost:3333/api/articles/:articleId
router.post('/articles/:articleId', isAuthenticated, async (req, res) => {
    try {
        console.log(req.user._id);
        const articleId = req.params.articleId

        const comment = await Comment.Create({
            ...req.body,
            user: req.user._id,
            article: articleId
        });
        const article = await Article.findByIdAndUpdate(
            articleId,
            {
                $push: {
                    comments: {
                        commentBody: req.body.text,
                        user: req.user._id
                    }
                }
            },
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

// Get all comments
router.get('/articles/comments', async (req, res) => {

    try {

        const comments = await Comment.find();

        if (comments.length === 0) {
            return res.status(404).json({ message: 'No articles found with those keywords' });
        }

        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching articles' });
    }
})

module.exports = router;
