import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Comment() {
    const params = useParams();

    const [comments, setComments] = useState([]);
    console.log(params.id);
    useEffect(() => {
        const getComments = async () => {
            try {
                const { data: comments } = await axios.get(`/api/articles/${params.id}/comments`);
                // const commentData = await getOneArticle(params.id);
                if (!comments) {
                    throw new Error('No comments on that article')
                }
                console.log(comments);
                setComments(comments);
            } catch (err) {
                console.log(err);
            }
        }
        getComments();
    }, [params.id]);

    return (
        <div className="comment-section">
            {comments.map(comment => (
                <div key={comment._id} className="comment">
                    <p className="comment-text">{comment.text}</p>
                    <p>By:{comment.user.username}</p>
                </div>
            ))}
        </div>
    )
}
