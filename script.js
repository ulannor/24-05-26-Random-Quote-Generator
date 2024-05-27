const text = document.getElementById('text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let quoteData = [];

const getRandomNumber = (length) => {
    return Math.floor(Math.random() * length)
};

const authorPropParser = (string) => {
    if (string.includes(", type.fit")) {
        return string.replace(", type.fit", "");
    } else {
        return "Unknown"
    }
}


async function fetchQuotes() {
    try {
        let response = await fetch("https://type.fit/api/quotes");
        let data = await response.json();
        quoteData = data;
        let randomObj = quoteData[getRandomNumber(quoteData.length)]
        displayQuote(randomObj)
        updateTweetLink()
    } catch (err) {
        console.log(err);
    }
}

const displayQuote = (obj) => {
    text.textContent = obj.text
    author.textContent = authorPropParser(obj.author)
};

function updateTweetLink() {
    const tweetQuoteElement = document.getElementById('tweet-quote');

    // Encode the quote and author for the URL
    const tweetText = `"${text.textContent}" - ${author.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(tweetText)}`;

    // Set the href attribute of the tweet-quote element
    tweetQuoteElement.setAttribute('href', tweetUrl);
}


function getNewQuote() {
    // Fetch a new quote and author, then update currentQuote and currentAuthor
    fetchQuotes();
}

document.getElementById('new-quote').addEventListener('click', getNewQuote);

fetchQuotes();