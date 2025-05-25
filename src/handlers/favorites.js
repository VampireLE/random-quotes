import {currentQuote} from "./../../index.js";

const favoriteBtn = document.getElementById('favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');

favoriteBtn.addEventListener('click', () => toggleFavorite(currentQuote));

hideToggleFavoriteBtn(favoriteBtn)

function handleFavorite(isFavorite) {
    showBtn(favoriteBtn)
    toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavorite(quote) {
    quote.isFavorite = !quote.isFavorite;

    const {text, author, isFavorite} = quote;
    
    toggleFavoriteBtnIcon(isFavorite, favoriteBtn);

    if (isFavorite) {
        showFavoriteCard(text, author, favoriteContainer);
    } else {
        hideFavoriteCard(quote.text);
    }
}

function toggleFavoriteBtnIcon(isFavorite, el) {
    el.classList.toggle('fa', isFavorite);
    el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
    btn.style.display = 'inline-block';
}

function hideToggleFavoriteBtn(btn) {
    btn.style.display = 'none';
}

function showFavoriteCard(quote, author, container) {
    const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');
        favoriteCard.innerHTML = `
            <p>${quote}</p>
            <p class="author">${author}</p>
        `
        container.appendChild(favoriteCard)
}

function hideFavoriteCard(text) {
    const favoriteCards = document.querySelectorAll('.favorite-card')
    favoriteCards.forEach(el => {
        if (el.textContent.includes(text)) {
            el.remove();
        }
    });
}

export {
    toggleFavoriteBtnIcon as toggleFavoriteIcon,
    showBtn,
    hideToggleFavoriteBtn,
    showFavoriteCard,
    handleFavorite,
    hideFavoriteCard
}