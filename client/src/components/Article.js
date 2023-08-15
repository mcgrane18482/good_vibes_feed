import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { useNavigate, NavLink } from 'react-router-dom';


export default function Article() {
    const navigate = useNavigate();
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
                    <NavLink to={`/article/${article._id}`} key={article._id}>
                        <h3>{article.title}</h3>
                        <h5>{article.description}</h5>
                    </NavLink>
                )
            })}
        </div>
    );
};

