import { useEffect, useState } from "react";

export default function Quotes() {
    const [quote, setQuote] = useState({
        text: "",
        author: "",
        authorLink: ""
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://www.brainyquote.com/link/quotebr.js";
        script.async = true;

        document.body.appendChild(script);

        // Parse quote content at script.src
        script.onload = () => {
            const quoteText = document.querySelector("b").nextSibling.innerText.trim();
            const authorName = document.querySelector("a").innerText;
            const authorLink = document.querySelector("a").href;

            setQuote({
                text: quoteText,
                author: authorName,
                authorLink
            });
        }

        // Should avoid memory leaks by removing the script once it is no longer necessary
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="quoteSection">
            <h2 className="quote">
                {quote.text}
                <small>
                    <i>
                        <a href={quote.authorLink} target="_blank" rel="nofollow">
                            {quote.author}
                        </a>
                    </i>
                </small>
            </h2>
        </div>
    )
}