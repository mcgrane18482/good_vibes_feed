import Article from "../components/Article";
import Quotes from "../components/Quotes";

export default function Landing() {
    return (
        <>
            <Quotes />

            <main>
                <h1>Welcome to the Good Vibes Feed!</h1>

                <h3>Bringing You Positivity, One Story at a Time</h3>


                <h3>Bringing You Positivity, One Story at a Time</h3>

                {/* <div className="articles">
                    {!article.length && <p>No articles have been added.</p>}

                    {article.map(article => (
                        <div key={article._id} className="article column">
                            <h3>{article.text}</h3>
                            <div className="column">

                            </div>
                        </div>
                    ))}
                </div> */}
                <Article />

            </main>
        </>
    )
}