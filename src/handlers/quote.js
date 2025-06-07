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


function findQuoteById(quotes, id) {
    return quotes.find(quote => quote.id === id)
}

function handleQuote(quotes, favoritesQuote, setCurrentQuote) {
    const randomQuote = choseRandomQuote(quotes);
    if (favoritesQuote.find(quote => quote.id === randomQuote.id)) randomQuote.isFavorite = true;
    setCurrentQuote(randomQuote)
    displayQuote(randomQuote);
}

export { handleQuote, displayQuote, findQuoteById};