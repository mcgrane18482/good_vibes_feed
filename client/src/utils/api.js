export const getArticles = () => {
    return fetch('/api/articles', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};