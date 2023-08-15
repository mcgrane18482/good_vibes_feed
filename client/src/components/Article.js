import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';

export default function Article() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticleData = async () => {
            try {
                const res = await getArticles();
                if (!res.ok) {
                    throw new Error('No articles found')
                }
                const articles = await res.json();
                setArticles(articles);
            } catch (err) {
                console.log(err)
            }
        };
        getArticleData();
    }, []);

    return (

        <div>
            <h3>Articles galore!</h3>
            {articles.map((article) => {
                return (
                    <li key={article._id}>
                        <h3>{article.title}</h3>
                        <h5>{article.description}</h5>
                    </li>
                )
            })}
        </div>
    );
};