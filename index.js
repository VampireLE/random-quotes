import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import { 
    // hideFavoriteBtn, 
    showFavoriteCard, 
    showFavoriteBtn, 
    toggleFavoriteCard,
    removeFavoriteCard
} from "./src/handlers/favorites.js";

import {
    localStorageSetItem, 
    localStorageGetItem, 
    localStorageRemoveItem, 
    localStorageClear
} from './src/utils/localStorage.js';

import { getRandomQuote } from "./src/handlers/randomQuote.js";
import { removeObjectFromArrayById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTES_KEY = 'currentQuotes';

const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');

const randomQuoteBtn = document.getElementById('random-quote-btn');


let currentQuote = null;

const favoritesQuote = [];

function removeFavoriteQuote(id) {
    if (id === currentQuote.id) {
        toggleCurrentQuote();
    } else {
        removeObjectFromArrayById(favoritesQuote, id)
        removeFavoriteCard(id)
        localStorageSetItem(FAVORITE_QUOTES_KEY, favoritesQuote);
    }
}

function toggleCurrentQuote() {
    currentQuote.isFavorite = !currentQuote.isFavorite
    showFavoriteBtn(currentQuote.isFavorite);
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)
    if (currentQuote.isFavorite) {
        favoritesQuote.push({...currentQuote})
    } else {
        removeObjectFromArrayById(favoritesQuote, currentQuote.id);
        showFavoriteBtn(currentQuote.isFavorite);
        localStorageSetItem(FAVORITE_QUOTES_KEY, favoritesQuote);
    }
}

function setCurrentQuote(quote) {
    currentQuote = {...quote};
    removeObjectFromArrayById(favoritesQuote, currentQuote.id);
    displayCurrentQuote(currentQuote)
    showFavoriteBtn(currentQuote.isFavorite)
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)
}

function init() {
    // hideFavoriteBtn();

    const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTES_KEY);
    if (favoriteQuotesFromStorage) {
        favoriteQuotesFromStorage.forEach(quote => {
                favoritesQuote.push(quote);
                showFavoriteCard(quote, favoriteContainer);
            })
        }
        
    const currentQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
    if (currentQuoteFromStorage) {
       setCurrentQuote(currentQuoteFromStorage)
    }
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)

}

window.addEventListener('load', init);

randomQuoteBtn.addEventListener('click', () => setCurrentQuote(getRandomQuote()));
quoteFavoriteBtn.addEventListener('click', toggleCurrentQuote);



export { quoteFavoriteBtn, removeFavoriteQuote};