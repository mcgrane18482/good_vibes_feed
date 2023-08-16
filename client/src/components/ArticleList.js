import { useEffect, useState } from 'react';
import { getArticles } from '../utils/api';
import { NavLink } from 'react-router-dom';

export default function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticleData = async () => {
            try {
                const res = await getArticles();
                if (!res) {
                    throw new Error('No articles found');
                }

                setArticles(res);
            } catch (err) {
                console.log(err);
            }
        };
        getArticleData();
    }, []);

    return (
        <div className="articles p-6">
            <h3 className="text-2xl font-semibold mb-4">Todays Postive Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <NavLink
                        to={`/article/${article._id}`}
                        key={article._id}
                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={article.urlToImage}
                            alt=""
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                {article.title}
                            </h3>
                            <p className="text-gray-400">{article.description}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}