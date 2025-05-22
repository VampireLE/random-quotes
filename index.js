import quotes from "./src/qoutes.js";
import {hideFavoriteCard, showFavoriteCard, toggleFavoriteIcon } from "./src/favoritesHandler.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-autor');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');

let currentQuoteIndex;






function generateRandomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes.length); //floor укругляет в меньшую сторону ceil в большую
    const randomQuote = quotes[currentQuoteIndex];
    const {quote, author: quoteAuthor} = randomQuote
    quoteElement.textContent = quote;
    quoteAuthorElement.textContent = quoteAuthor;

    toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn)
    
    toggleFavoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite

    toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn)

    if (currentQuote.isFavorite) {
        showFavoriteCard(
            currentQuote.quote,
            currentQuote.author,
            favoriteContainer
        )
    } else {
        hideFavoriteCard(currentQuote.quote)
    }
}

generateBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)