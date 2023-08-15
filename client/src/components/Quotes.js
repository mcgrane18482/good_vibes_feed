

export default function Quotes() {

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