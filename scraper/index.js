const axios = require('axios');
const Article = require('../server/models/Article');

const getEntertainment = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    })
}

const getGeneral = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    });
};

const db = require('../server/config/connection');
db.once('open', async () => {

    await getEntertainment();
    await getGeneral();

});
