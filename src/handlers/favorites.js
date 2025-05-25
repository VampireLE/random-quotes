import {currentQuote} from "./../../index.js";

const toggleBtn = document.getElementById('toggle-favorite-btn');
const favoriteContainer = document.getElementById('favorites-container');

toggleBtn.addEventListener('click', toggleFavorite);

hideToggleFavoriteBtn(toggleBtn)

function handleFavorite(isFavorite) {
    showBtn(toggleBtn)
    toggleFavoriteIcon(isFavorite, toggleBtn);
}

function toggleFavorite() {
    currentQuote.isFavorite = !currentQuote.isFavorite;

    toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

    if (currentQuote.isFavorite) {
        showFavoriteCard(
            currentQuote.text,
            currentQuote.author,
            favoriteContainer
        )
    } else {
        hideFavoriteCard(currentQuote.text);
    }
}

function toggleFavoriteIcon(isFavorite, el) {
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
    toggleFavoriteIcon,
    showBtn,
    hideToggleFavoriteBtn,
    showFavoriteCard,
    handleFavorite,
    hideFavoriteCard
}