import Article from "../components/Article";

export default function Landing() {

    return (
        <main>
            <div className="quoteSection">
                <h1 className="quote"></h1>
            </div>

            <h1>Welcome to the Good Vibes Feed!</h1>

            <h3>Bringing You Positivity, One Story at a Time</h3>

            <Article />
        </main>
    )
}