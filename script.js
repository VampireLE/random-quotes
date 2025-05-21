import quotes from "./qoutes.js";

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const quoteAuthorElement = document.getElementById('quote-autor');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); //floor укругляет в меньшую сторону ceil в большую
    const randomQuote = quotes[randomIndex];
    const {quote, author: quoteAuthor} = randomQuote
    console.log(quote) //undefined
    quoteElement.textContent = quote;
    quoteAuthorElement.textContent = quoteAuthor;
}

generateBtn.addEventListener('click', generateRandomQuote)