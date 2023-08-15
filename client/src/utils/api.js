import axios from 'axios';

export const getArticles = () => {
    return axios.get('/api/articles', {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getOneArticle = (param) => {
    return axios.get(`/api/articles/${param}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};