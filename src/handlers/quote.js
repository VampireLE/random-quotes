import { generateRandomInt } from "./../utils.js";
import { handleFavorite } from "./favorites.js";

function displayQuote(quote) {
    const quoteElement = document.getElementById('quote');
    const quoteAuthorElement = document.getElementById('quote-autor');
    const {text, author, isFavorite} = quote;
    quoteElement.textContent = text;
    quoteAuthorElement.textContent = author;
    handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
    const randomIndex = generateRandomInt(quotes.length)
    return quotes[randomIndex];
}

function handleQuote(quotes, setCurrentQuote) {
    console.log(quotes)
    const randomQuote = choseRandomQuote(quotes);
    setCurrentQuote(randomQuote)
    displayQuote(randomQuote);
}

export { handleQuote};