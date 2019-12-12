/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


quotes = [ {
  quote: "quote quote",
  source: "source1",
  citation: "citation1",
  
} , 
          {

  quote: "quote quote 1",
  source: "source2",
  citation: "citation2"
}
         ]


/*** 
 * `quotes` array 
***/




function getRandomQuote() {
  
  RandomQuote = Math.floor(Math.random() * quotes.lenght)
  return RandomQuote[quotes]
}
/***
 * `getRandomQuote` function
***/



function printQuote() {


var randomQuote = getRandomQuote()
var HTML = ''


HTML += "<p class="quote">" += [randomQuote.quote] + "</p>"
HTML += "<p class="source">" += [randomQuote.source]

if(quotes.citation) {
  "<span class= "citation">" += [HTML.citation] </span>
  
}
  
  if (quotes.year)
  "<span class="year">" += [HTML.year] </span>
</p>

  

}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

console.log(printQuote());

document.getElementById('load-quote').addEventListener("click", printQuote, false);

