import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { NavLink } from 'react-router-dom';


export default function ArticleList() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticleData = async () => {
            try {
                const res = await getArticles();
                if (!res.ok) {
                    throw new Error('No articles found')
                }
                const articleData = await res.json();
                console.log(articleData);
                setArticles(articleData);
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
                    <NavLink to={`/article/${article._id}`} key={article._id}>
                        <h3>{article.title}</h3>
                        <h5>{article.description}</h5>
                    </NavLink>
                )
            })}
        </div>
    );
};

