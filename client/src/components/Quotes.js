import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Quotes() {
    const [quoteData, setQuoteData] = useState("");

    const fetchQuote = async () => {
        try {
            const category = "happiness";
            const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
                params: { category },
                headers: { "X-Api-Key": "64QhzObFNMJc5EWatUpSfa1uJtMwuRousydgnQLX" }
            });

            const result = response.data;
            const randomIndex = Math.floor(Math.random() * result.length);
            const randomQuoteData = result[randomIndex] || "No quotes available.";
            setQuoteData(randomQuoteData);
        } catch (error) {
            console.error("Error: ", error.message);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quoteSection">
            {quoteData && (
                <>
                    <p className="quote">"{quoteData.quote}"</p>
                    <p className="author">- {quoteData.author}</p>
                </>
            )}
        </div>
    );
}