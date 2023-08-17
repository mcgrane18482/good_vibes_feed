import React, { useEffect, useState } from "react";
import { getOneArticle } from '../utils/api';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Comment from '../components/Comment';

export default function SingleArticle() {
    const params = useParams();
    const [articleData, setArticleData] = useState(null);

    const [formData, setFormData] = useState({
        text: ''
    });

    useEffect(() => {
        getOneArticle(params.id)
            .then(articleData => {
                console.log(articleData)
                setArticleData(articleData)
            })

    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const { data: articleData } = await axios.post(`/api/articles/${params.id}`, formData);
        console.log('comment', articleData)
        setArticleData(articleData);

        setFormData({
            text: '',
            username: ''
        });
    }

    const handleInputChange = e => {
        setFormData({
            ...formData,
            text: e.target.value
        });
    };


    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
            {articleData && (
                <main className="max-w-5xl mx-auto px-4 py-12">
                    <div className="bg-gray-600 rounded-lg shadow-lg p-8">
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">{articleData.title}</h3>
                        <img src={articleData.urlToImage} alt='' className="w-full rounded-lg mb-4" />
                        <h5 className="text-lg md:text-xl mb-2">{articleData.description}</h5>
                        <p className="mb-4">{articleData.content}</p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={articleData.url}
                            className="text-blue-500 hover:underline mb-4"
                        >
                            Read Full articleData
                        </a>
                        <form className="comment-form" onSubmit={handleSubmit}>
                            <h2>Add a comment</h2>
                            <input name="text" value={formData.text} type="text" onChange={handleInputChange} placeholder="Leave a comment on this article" />
                            <button>Comment</button>
                        </form>

                        <div className="comments-section">
                            <Comment something={'something'} articleData={articleData} />
                        </div>

                    </div>
                </main>
            )}
        </div>
    )
}
