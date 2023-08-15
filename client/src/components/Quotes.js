import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Quotes() {
    const [quote, setQuote] = useState("");

    const fetchQuote = async () => {
        try {
            const category = "happiness";
            const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
                params: { category },
                headers: { "X-Api-Key": "64QhzObFNMJc5EWatUpSfa1uJtMwuRousydgnQLX" }
            });

            const result = response.data;
            const randomIndex = Math.floor(Math.random() * result.length);
            const randomQuote = result[randomIndex]?.quote || "No quotes available.";
            setQuote(randomQuote);
        } catch (error) {
            console.error("Error: ", error.message);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quoteSection">
            <h3 className="quote">{quote}</h3>
        </div>
    );
}