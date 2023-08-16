import { useState, useEffect } from "react";
import { getComments } from '../utils/api';

export default function Comment() {
    const [comments, setComments] = useState('');

    useEffect(() => {
        const getCommentData = async () => {
            try {
                const res = await getComments();
                if (!res) {
                    throw new Error('No articles found')
                }

                setComments(res);
            } catch (err) {
                console.log(err)
            }
        };
        getCommentData();
    }, []);

    return (
        <div className="comment-section">
            {comments && (
                <div className="comment">
                    <p className="comment-text">Dummy comment text</p>
                </div>
            )}
        </div>
    )
}
