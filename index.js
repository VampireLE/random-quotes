import quotes from "./src/data/qoutes.js";
import { handleQuote } from "./src/handlers/quote.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";

let currentQuote = null;

function setCurrentQuote(quote) {
    currentQuote = quote;
}


const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');
hideFavoriteBtn();
quoteFavoriteBtn.addEventListener('click', () => toggleFavorite(currentQuote, quoteFavoriteBtn, favoriteContainer));

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () => handleQuote(quotes, setCurrentQuote));

export { quoteFavoriteBtn};