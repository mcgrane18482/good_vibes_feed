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
            <h3>Articles</h3>
            {articles.map((article) => {
                return (
                    <NavLink to={`/article/${article._id}`} key={article._id}>
                        <h3>{article.title}</h3>
                        <img>{article.image}</img>
                        <h5>{article.description}</h5>
                        <p>{article.content}</p>
                        <p>{article.comments}</p>
                    </NavLink>
                )
            })}
        </div>
    );
};