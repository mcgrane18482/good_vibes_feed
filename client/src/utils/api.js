import axios from "axios";

export const getArticles = () => {
    return axios.get('/api/articles');
};

export const getOneArticle = () => {
    return axios.get('/api/articles/:articleId');
};