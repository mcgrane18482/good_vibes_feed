

export default function Quotes() {

    return (
        <div className="quoteSection">
            <h2 className="quote">
                Quote
            </h2>
            <iframe
                id="brainyQuote"
                title="BrainyQuote"
                width="300"
                height="100"

                src="https://www.brainyquote.com/link/quotebr.js"
            />
            <small>
                <i>
                    <a href="/quote_of_the_day" target="_blank" rel="nofollow">
                        More Quotes
                    </a>
                </i>
            </small>
        </div>
    )
}