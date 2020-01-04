/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//Quotes array

quotes = [ {
  quote: "Love For All, Hatred For None",
  source: "www.codeofliving.com",
  citation: "Khalifatul Masih III",
  year: "1900"
},
          {
 
          
  quote: "Never regret anything that made you smile.",
  source: "www.codeofliving.com",
  citation: "Mark Twain"
},
          
                {
 
          
  quote: "If I’m gonna tell a real story, I’m gonna start with my name",
  source: "Kendrick Lamar",
  
},
          
          {
  quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it",
  source: "Twitter",
  citation: "Patrick McKenzie",
  year: "2001"
   
          }
          
          
          
          
         ]





function getRandomQuote() {
  
  RandomQuote = Math.floor(Math.random() * quotes.length )
  return quotes[RandomQuote]
}
/***
 * `getRandomQuote` function.
 Generating the random quote, by choosing a random number according to the length of quotes array and using the floor function to make it an even number, then returning the quotes array and the one to be generated is the one generated in RandomQuote
***/



function printQuote() {


var randomQuote = getRandomQuote()
//the getRandomQuote function previously created is called
var HTML = ''
//an empty HTML string is created


HTML += '<p class="quote">' + [randomQuote.quote] + '</p>'
HTML += '<p class="source">' + [randomQuote.source]
// the HTML variable is concatinated with the quote html and source html, and its concatinated with the randomQuote quote and source

if(randomQuote.citation) {
HTML += '<span class= "citation">' + [randomQuote.citation] + '</span>'
  //if the quotes.citation is found, then do as previous just with citation
}
  
  if (randomQuote.year) 
  {
 HTML += '<span class="year">' + [randomQuote.year] + '</span> </p>'
 }
document.getElementById('quote-box').innerHTML = HTML;
  
 //if the quotes.year is found, then do as previous just with citation

  
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
console.log(quotes);
console.log(printQuote());


document.getElementById('load-quote').addEventListener("click", printQuote, false);

//when the load quote button is clicked, the printQuote function is executed
