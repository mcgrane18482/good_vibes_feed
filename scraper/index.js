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

const getBusiness = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    });
}

const getHealth = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    });
}

const getScience = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    });
}

const getSports = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    });
}

const getTechnology = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=227799a716f94abe913e8808e7847dc5').then(async res => {
        const articles = await Article.insertMany(res.data.articles);

        return articles;
    });
}

const getEverythingHappy = () => {
    axios.get('https://newsapi.org/v2/everything?q=happy&from=2023-08-11&to=2023-08-13&apiKey=227799a716f94abe913e8808e7847dc5')
}

const db = require('../server/config/connection');
db.once('open', async () => {

    await getEntertainment();
    await getGeneral();
    await getTechnology();

});
