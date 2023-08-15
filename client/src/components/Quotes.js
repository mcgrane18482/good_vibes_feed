import { useEffect } from "react";

export default function Quotes() {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://www.brainyquote.com/link/quotebr.js";
        script.async = true;

        document.body.appendChild(script);

        // Should avoid memory leaks by removing the script once it is no longer necessary
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="quoteSection">
            <h2 className="quote">
                <small>
                    <i>
                        <a href="/quote_of_the_day" target="_blank" rel="nofollow">more Quotes</a>
                    </i>
                </small>
            </h2>
        </div>
    )
}