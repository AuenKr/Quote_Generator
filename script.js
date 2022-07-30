// Get Quotes
const apiUrl = "https://type.fit/api/quotes"

let apiQuote = [];
let quote = [];

let quoteText = document.getElementById("quote");
let quoteAuthor = document.getElementById("author");
let tweetBtn = document.getElementById("share");
let nextBtn = document.getElementById("next-quote");


function NewQuote() {
    quote[0] = apiQuote[Math.floor(Math.random()*(apiQuote.length))];
    quoteText.textContent = quote[0]["text"];
    
    if (quote[0]["author"] == null) {
        quoteAuthor.textContent ="~ " + "Unknown";
    }
    else{
        quoteAuthor.textContent ="~ " + quote[0]["author"];
    }
    
}

async function GetQuote() {
    try {
        const respone = await fetch(apiUrl);
        apiQuote = await respone.json();
        NewQuote();
    } catch (error) {
        //Error code
    }
}
GetQuote();

// tweet
function tweetQuote(){
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ${quoteAuthor.textContent}` ;
    window.open(tweetUrl, '_Blank');
}

// Event Listners

tweetBtn.addEventListener('click', tweetQuote);
nextBtn.addEventListener('click', NewQuote);