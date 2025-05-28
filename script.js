async function getQuote() {
    let quote;
    let author;
    const data = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const json = await data.json();
    quote = json[0].quote;
    author = json[0].author;
 
    if (quote) {
        document.getElementById("quote").innerText = "''" + quote + "''";
        console.log(quote);
    }
 
    if (author){
        console.log(author);
    }
}
 
getQuote();