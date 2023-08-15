export const getArticles = () => {
    return fetch('/api/articles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getOneArticle = (param) => {
    return fetch(`/api/articles/${param}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};