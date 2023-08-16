import { useState, useEffect } from "react";

export default function Comment({ article }) {

    return (
        <div className="comment-section">
            {article.comments.map(comment => (
                <div key={comment._id} className="comment">
                    <p className="comment-text">{comment.text}</p>
                    <p>By:{comment.user.username}</p>
                </div>
            ))}
        </div>
    )
}
