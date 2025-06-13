import { quoteFavoriteBtn, removeFavoriteQuote } from "./../../index.js";


function toggleFavoriteCard(quote, container) {
    if (quote.isFavorite) {
        showFavoriteCard(quote, container);
    } else {
        removeFavoriteCard(quote.id);
    }
}



function showFavoriteBtn(isFavorite) {
    const btn = quoteFavoriteBtn;
    if (btn.style.display = 'none') {quoteFavoriteBtn.style.display = 'none'};
    btn.style.display = 'inline-block';
    btn.classList.contains('fa', isFavorite);
    btn.classList.contains('far', !isFavorite);
}

function showFavoriteCard(quote, container) {
    const {id, text, author} = quote;
    const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('favorite-card');
        favoriteCard.dataset.favoriteQuoteId = id;
        favoriteCard.innerHTML = `
            <div class="favorite-card-content">
            <p>${text}</p>
            <p class="favorite-quote-author">${author}</p>
            <button class="btn btn-danger">Remove from favorites<i class="far fa-trash-alt"></i></button>
        `
    container.appendChild(favoriteCard)
    
    const removeButton = favoriteCard.querySelector('.btn-danger');
    removeButton.addEventListener('click', () => removeFavoriteQuote(id));
}

function removeFavoriteCard(id) {
    const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
    if (card) {
        card.remove()
    }
  
}

export {
    // hideFavoriteBtn,
    removeFavoriteQuote,
    showFavoriteCard,
    showFavoriteBtn,
    toggleFavoriteCard,
    removeFavoriteCard
}