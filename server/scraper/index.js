require('dotenv').config();
const axios = require('axios');
const Article = require('../models/Article');
const db = require('../config/connection');

const getEntertainment = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=227799a716f94abe913e8808e7847dc5');

const getGeneral = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=227799a716f94abe913e8808e7847dc5');

const getBusiness = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=227799a716f94abe913e8808e7847dc5');

const getHealth = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=227799a716f94abe913e8808e7847dc5');


const getScience = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=227799a716f94abe913e8808e7847dc5');


const getSports = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=227799a716f94abe913e8808e7847dc5');


const getTechnology = () =>
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=227799a716f94abe913e8808e7847dc5');


const getEverythingHappy = () =>
    axios.get('https://newsapi.org/v2/everything?q=happy&from=2023-08-11&to=2023-08-13&apiKey=227799a716f94abe913e8808e7847dc5');


db.once('open', async () => {
    const { data: { articles: entertainment } } = await getEntertainment();
    const { data: { articles: general } } = await getGeneral();
    const { data: { articles: business } } = await getBusiness();
    const { data: { articles: health } } = await getHealth();
    const { data: { articles: science } } = await getScience();
    const { data: { articles: sports } } = await getSports();
    const { data: { articles: technology } } = await getTechnology();

    await Article.deleteMany({});
    console.log("articles deleted");

    await Article.insertMany([
        ...entertainment,
        ...general,
        ...business,
        ...health,
        ...science,
        ...sports,
        ...technology
    ]);
    console.log("articles seeded");

    const articles = await Article.find({ $text: { $search: "good happy celebrate sweet rescue safe saved wins succeeds cute hero reunion -Taliban -dies -death -Trump -Biden" } });
    await Article.deleteMany({});
    await Article.insertMany(articles);
    console.log(articles.length);
    process.exit();

});
