const text = document.getElementById('text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let quoteData = [];

const getRandomNumber = (length) => {
    return Math.floor(Math.random() * (length + 1)
        };


async function fetchQuotes() {
    try {
        let response = await fetch("https://type.fit/api/quotes");
        let data = await response.json();
        quoteData = data;
        for (let i = 0; i < quoteData.length; i++) {
            console.log(quoteData[i]);
        }
    } catch (err) {
        console.log(err);
    }
}

fetchQuotes();