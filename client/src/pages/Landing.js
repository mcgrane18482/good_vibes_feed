import Article from "../components/Article";
import Quotes from "../components/Quotes";

export default function Landing() {
  return (
    <>
      <Quotes />

      <main>
        <h2 className="text-center">Welcome to the Good Vibes Feed!</h2>

        <h3 className="text-center">Bringing You Positivity, One Story at a Time.</h3>

        <Article />
        

      </main>
    </>
  )
}
