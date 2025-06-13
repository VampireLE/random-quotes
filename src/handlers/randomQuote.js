import quotes from "../data/qoutes.js";
import { generateRandomInt } from "../utils/math.js";

function getRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    const randomQuote = {...quotes[randomIndex]};
    return randomQuote;
}

export { getRandomQuote }