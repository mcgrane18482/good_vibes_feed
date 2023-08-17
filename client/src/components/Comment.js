import React from 'react';

export default function Comment({ articleData }) {

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>
            {articleData?.comments.length ? (
                <div className="space-y-4">
                    {articleData.comments.map(comment => (
                        <div key={comment._id} className="bg-white p-4 rounded shadow-md">
                            <p className="text-gray-800 text-base">{comment.text}</p>
                            <p className="text-gray-600">By: {comment.user.username}</p>
                        </div>
                    ))}
                </div>
            ) : <p>No comments have been added.</p>}
        </div>
    )
}
