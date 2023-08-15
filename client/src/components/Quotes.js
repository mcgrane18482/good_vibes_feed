import { useState, useEffect } from "react";
import $ from "jquery";


export default function Quotes() {
    const [quote, setQuote] = useState("");

    const fetchQuote = () => {
        var category = "happiness";
        $.ajax({
            method: "GET",
            url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
            headers: { "X-Api-Key": process.env.REACT_APP_NINJA_QUOTES_KEY },
            contentType: "application/json",
            success: function (result) {
                const randomIndex = Math.floor(Math.random() * result.length);
                const randomQuote = result[randomIndex]?.quote || "No quotes available.";
                setQuote(randomQuote);
            },
            error: function ajaxError(jqXHR) {
                console.error("Error: ", jqXHR.responseText);
            }
        });
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="quoteSection">
            <h2 className="quote">{quote}</h2>
        </div>
    );
}