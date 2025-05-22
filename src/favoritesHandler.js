function toggleFavoriteIcon(isFavorite, el) {
    el.classList.toggle('fa', isFavorite);
    el.classList.toggle('far', !isFavorite);
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

function hideFavoriteCard(quote) {
    const favoriteCards = document.querySelectorAll('.favorite-card')
    favoriteCards.forEach(el => {
        if (el.textContent.includes(quote)) {
            el.remove();
        }
    });
}

export {
    toggleFavoriteIcon,
    showFavoriteCard,
    hideFavoriteCard
}