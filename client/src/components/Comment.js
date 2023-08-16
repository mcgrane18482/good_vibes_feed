import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneArticle } from '../utils/api';

export default function Comment({ article }) {
    const params = useParams();
    const [comments, setComments] = useState({});


    useEffect(() => {
        const getComments = async () => {
            try {
                const commentData = await getOneArticle(params.id);
                if (!commentData) {
                    throw new Error('No article was found with that id')
                }
                console.log(commentData);
                // setComments(commentData.comments);
            } catch (err) {
                console.log(err);
            }
        }
        getComments();
    }, [params.id]);

    return (
        <div className="comment-section">
            {/* {article.comments.map(comment => (
                <div key={comment._id} className="comment">
                    <p className="comment-text">{comment.text}</p>
                    <p>By:{comment.user.username}</p>
                </div>
            ))} */}
        </div>
    )
}