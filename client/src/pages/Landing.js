import ArticleList from "../components/ArticleList";
import Quotes from "../components/Quotes";

export default function Landing() {

    return (
        <>
            <Quotes />

            <main>
                <h1>Welcome to the Good Vibes Feed!</h1>

                <h3>Bringing You Positivity, One Story at a Time</h3>

                <ArticleList />
            </main>
        </>
    )
}