const router = require('express').Router();
const Article = require('../models/Article');
const Comment = require('../models/Comment');
const User = require('../models/User');
const { validateToken } = require("../auth");

async function isAuthenticated(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) throw new Error("You are not authorized to perform that action.");

        const data = await validateToken(token);

        const user = await User.findById(data.userId);
        console.log('user', user);
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

// Get all articles
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
        const article = await Article.findById(req.params.articleId).populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'User'
            }
        });
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
        const articleId = req.params.articleId

        const comment = await Comment.create({
            ...req.body,
            user: req.user._id,
            article: articleId
        });
        const article = await Article.findByIdAndUpdate(
            articleId,
            {
                $push: {
                    comments: comment._id
                }
            },
            { new: true }).populate({
                path: 'comments',
                populate: {
                    path: 'user',
                    model: 'User'
                }
            });
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
router.get('/articles/:articleId/comments', async (req, res) => {

    try {
        const articleId = req.params.articleId;
        const article = await Article.findById(articleId).populate({
            path: 'comments',
            populate: {
                path: 'user',
                model: 'User'
            }
        });

        if (article.length === 0) {
            return res.status(404).json({ message: 'No articles found with those keywords' });
        }
        const comments = article.comments;
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching articles' });
    }
})

module.exports = router;
