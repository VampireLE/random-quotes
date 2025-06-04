import { generateRandomInt } from "./../utils/math.js";
import { handleFavorite } from "./favorites.js";

function displayQuote(quote) {
    const quoteElement = document.getElementById('quote');
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-autor');
    const {id, text, author, isFavorite} = quote;
    quoteElement.dataset.currentQuoteId = id;
    
    quoteTextElement.textContent = text;
    quoteAuthorElement.textContent = author;
    handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
    const randomIndex = generateRandomInt(quotes.length)
    return quotes[randomIndex];
}

function handleQuote(quotes, setCurrentQuote) {
    const randomQuote = choseRandomQuote(quotes);
    setCurrentQuote(randomQuote)
    displayQuote(randomQuote);
}

export { handleQuote};