import { useEffect, useState } from "react";
import { getOneArticle } from '../utils/api';
import { useParams } from "react-router-dom";

export default function SingleArticle() {
    const params = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        const getArticle = async () => {
            try {
                const res = await getOneArticle(params);
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
    }, []);

    return (
        <>
            <h1>Article</h1>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </>
    )
}