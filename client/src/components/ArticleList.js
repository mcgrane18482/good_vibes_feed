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
        <>
            <div className='articles'>
                <h3>Find Positive Articles Below:</h3>
            </div>
            <div className='card'>
                {articles.map((article) => {
                    return (
                        <ul>
                            <NavLink to={`/article/${article._id}`} key={article._id}>
                                <h3>{article.title}</h3>
                                <img>{article.image}</img>
                                <h5>{article.description}</h5>
                                {/* <p>{article.content}</p> */}
                                {/* <p>{article.comments}</p> */}
                            </NavLink>
                        </ul>
                    )
                })}
            </div>

        </>
    );
};