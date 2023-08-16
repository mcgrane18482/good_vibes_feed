import React, { useEffect, useState } from "react";
import { getOneArticle } from '../utils/api';
import { useParams } from "react-router-dom";

export default function SingleArticle() {
    const params = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        const getArticle = async () => {
            try {
                const articleData = await getOneArticle(params.id);
                if (!articleData) {
                    throw new Error('No article was found with that id')
                }

                setArticle(articleData);
            } catch (err) {
                console.log(err);
            }
        }
        getArticle();
    }, [params.id]);

    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
            <main className="max-w-5xl mx-auto px-4 py-12">
                <div className="bg-gray-600 rounded-lg shadow-lg p-8">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{article.title}</h3>
                    <img src={article.urlToImage} alt='' className="w-full rounded-lg mb-4" />
                    <h5 className="text-lg md:text-xl mb-2">{article.description}</h5>
                    <p className="mb-4">{article.content}</p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={article.url}
                        className="text-blue-500 hover:underline mb-4"
                    >
                        {article.url}
                    </a>
                    <p className="mb-4">Comments: {article.comments}</p>
                </div>
            </main>
        </div>
    )
}
