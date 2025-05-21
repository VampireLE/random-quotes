import quotes from "./qoutes.js";

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
    toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';
    toggleFavoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite
    toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

    if (currentQuote.isFavorite) {
        const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');
        favoriteCard.innerHTML = `
            <p>${currentQuote.quote}</p>
            <p class="author">${currentQuote.author}</p>
        `
        favoriteContainer.appendChild(favoriteCard)
    } else {
        const favoriteCards = document.querySelectorAll('.favorite-card')
        favoriteCards.forEach(el => {
            if (el.textContent.includes(currentQuote.quote)) {
                el.remove();
            }
        });
    }
}

generateBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)