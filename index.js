import quotes from "./src/data/qoutes.js";
import { handleQuote } from "./src/handlers/quote.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";

let currentQuote = null;

function setCurrentQuote(quote) {
    currentQuote = quote;
}


const favoriteBtn = document.getElementById('favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');
hideFavoriteBtn(favoriteBtn);
favoriteBtn.addEventListener('click', () => toggleFavorite(currentQuote, favoriteBtn, favoriteContainer));

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () => handleQuote(quotes, setCurrentQuote));

export { favoriteBtn };