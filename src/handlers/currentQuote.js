function displayCurrentQuote(quote) {
    const quoteElement = document.getElementById('quote');
    const quoteTextElement = document.getElementById('quote-text');
    const quoteAuthorElement = document.getElementById('quote-autor');
    const {id, text, author, isFavorite} = quote;
    quoteElement.dataset.currentQuoteId = id;
    
    quoteTextElement.textContent = text;
    quoteAuthorElement.textContent = author;
}

export { displayCurrentQuote };