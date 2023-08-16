import { useEffect, useState } from "react";
import { getOneArticle } from '../utils/api';
import { useParams } from "react-router-dom";
import axios from 'axios';
import article from '../pages/styles/article.scss';
import Comment from '../components/Comment';


export default function SingleArticle() {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState({});

    const [formData, setFormData] = useState({
        text: ''
    });

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post(`/api/articles/${params.id}`, formData);

    }

    const handleInputChange = e => {
        setFormData({
            ...formData,
            text: e.target.value
        });
    };

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
            <div className="article-container">
                <div className="article-header">
                    <h3>{article.title}</h3>
                </div>

                <div className="article-content">
                    <h5>{article.description}</h5>
                    <p>{article.content}</p>
                    <a href={article.url}>Read full Article Here</a>
                </div>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <h2>Add a comment</h2>
                    <input name="text" value={formData.text} type="text" onChange={handleInputChange} placeholder="Leave a comment on this article" />
                    <button>Comment</button>
                </form>

                <div className="comments-section">
                    {comments && <Comment />}
                </div>

            </div>
        </>
    )
}