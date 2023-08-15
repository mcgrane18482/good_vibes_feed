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


module.exports = router;
