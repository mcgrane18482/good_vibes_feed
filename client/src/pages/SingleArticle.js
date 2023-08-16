import { useEffect, useState } from "react";
import { getOneArticle } from '../utils/api';
import { useParams } from "react-router-dom";

export default function SingleArticle() {
    const params = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        const getArticle = async () => {
            try {
                console.log(params.id)
                const articleData = await getOneArticle(params.id);
                if (!articleData) {
                    throw new Error('No article was found with that id')
                }

                setArticle(articleData);
                console.log(article.urlToImage);
            } catch (err) {
                console.log(err);
            }
        }
        getArticle();
    }, [params.id]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
            <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 w-full">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <img src={article.urlToImage} alt='' className="w-full rounded-lg mb-4" />
                <h5 className="text-lg mb-2">{article.description}</h5>
                <p className="mb-4">{article.content}</p>
                <a href={article.url} className="text-blue-500 hover:underline mb-4">
                    {article.url}
                </a>
                <p className="mb-4">Comments: {article.comments}</p>
            </div>
        </div>
    )
}