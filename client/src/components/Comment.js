import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Comment() {
    const params = useParams();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            try {
                const { data: comments } = await axios.get(`/api/articles/${params.id}/comments`);
                if (!comments) {
                    throw new Error('No comments on that article');
                }
                setComments(comments);
            } catch (err) {
                console.log(err);
            }
        }
        getComments();
    }, [params.id]);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            <div className="space-y-4">
                {comments.map(comment => (
                    <div key={comment._id} className="bg-white p-4 rounded shadow-md">
                        <p className="text-gray-800 text-base">{comment.text}</p>
                        <p className="text-gray-600">By: {comment.user.username}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
