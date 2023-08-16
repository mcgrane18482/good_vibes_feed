import React from "react";
import ArticleList from "../components/ArticleList";
import Quotes from "../components/Quotes";

export default function Landing() {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white min-h-screen">
            <main className="max-w-5xl mx-auto px-4 py-12">
                <Quotes />

                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Welcome to the Good Vibes Feed!</h1>
                    <h3 className="text-xl md:text-2xl mt-2">Bringing You Positivity, One Story at a Time</h3>
                </div>
                <ArticleList />
            </main>
        </div>
    );
}
