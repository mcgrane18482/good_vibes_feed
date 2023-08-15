import axios from 'axios';

export const getArticles = async () => {
    const res = await axios.get('/api/articles')
    return res.data;

}
export const getOneArticle = async (articleId) => {
    const res = await axios.get(`/api/articles/${articleId}`)
    return res.data;
}

// export const getArticles = () => {
//     return fetch('/api/articles', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
// };

// export const getOneArticle = (params) => {
//     return fetch(`/api/articles/${params}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
// };