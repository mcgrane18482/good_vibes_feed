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
                const res = await getOneArticle(params.id);
                if (!res.ok) {
                    throw new Error('No article was found with that id')
                }
                const articleData = await res.json();
                setArticle(articleData);
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
            <img alt=''>{article.image}</img>
            <h5>{article.description}</h5>
            <p>{article.content}</p>
            <p>{article.comments}</p>
        </>
    )
}