import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
    const params = useParams();
    const [article, setArticle] = useState({});

    useEffect((params) => {
        const getArticle = async () => {}
    })

    return (
        <>
            <h1>Article</h1>
        </>
    )
}