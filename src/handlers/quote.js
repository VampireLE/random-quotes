
import quotes from "./../data/qoutes.js";
import { generateRandomInt } from "./../utils.js";
import { handleFavorite } from "./favorites.js";

let currentQuote = null;

function displayQuote(quote) {
    const quoteElement = document.getElementById('quote');
    const quoteAuthorElement = document.getElementById('quote-autor');
    const {text, author, isFavorite} = quote;
    quoteElement.textContent = text;
    quoteAuthorElement.textContent = author;
    handleFavorite(isFavorite);
}

function choseRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length)
    return quotes[randomIndex];
}

function handleQuote() {
    const randomQuote = choseRandomQuote(quotes);
    currentQuote = randomQuote
    displayQuote(randomQuote);
    let currentQuoteIndex;
}

export { handleQuote, currentQuote };