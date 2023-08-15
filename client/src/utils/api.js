export const getArticles = () => {
    return fetch('/api/articles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getOneArticle = (params) => {
    return fetch(`/api/articles/${params}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};