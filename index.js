import quotes from "./src/data/qoutes.js";
import { handleQuote, displayQuote , findQuoteById} from "./src/handlers/quote.js";
import { toggleFavorite, hideFavoriteBtn, removeFavoriteQuote, showFavoriteCard } from "./src/handlers/favorites.js";
import {localStorageSetItem, localStorageGetItem, localStorageRemoveItem, localStorageClear} from './src/utils/localStorage.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'currentQuotes';

let currentQuote = null;
const favoritesQuote = [];

// toggle remove from favorites
function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
    if (shouldToggleIsFavorite) {
        quote.isFavorite = !quote.isFavorite
        if (quote.isFavorite) {
            favoritesQuote.push({...quote})
        } else {
            const index = favoritesQuote.findIndex(favoriteQuote => favoriteQuote.id === quote.id)
            if (index !== -1) {
                favoritesQuote.splice(index, 1);
            }
        }
        localStorageSetItem(FAVORITE_QUOTES_KEY, favoritesQuote);

    }
    currentQuote = quote;
    localStorageSetItem(CURRENT_QUOTE_KEY, quote)

}

function init() {
    const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
    
    if (currentQuoteFromStorage) {
        displayQuote(currentQuoteFromStorage);
        const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
        quote.isFavorite = currentQuoteFromStorage.isFavorite;
        currentQuote = quote;
    }

    const quotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
        if (quotesFromStorage) {
            quotesFromStorage.forEach(quote => {
                favoritesQuote.push(quote);
                showFavoriteCard(quote, setCurrentQuote, favoriteContainer);
                
            })
        }
}

window.addEventListener('load', init);


const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');
hideFavoriteBtn();

quoteFavoriteBtn.addEventListener('click', () => toggleFavorite(currentQuote, setCurrentQuote, quoteFavoriteBtn, favoriteContainer));

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () => handleQuote(quotes, favoritesQuote, setCurrentQuote));

export { quoteFavoriteBtn};