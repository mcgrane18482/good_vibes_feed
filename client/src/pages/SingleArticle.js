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
        <>
            <h1>Article</h1>
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt=''/>
            <h5>{article.description}</h5>
            <p>{article.content}</p>
            <a href={article.url}>{article.url}</a>
            <p>{article.comments}</p>
        </>
    )
}