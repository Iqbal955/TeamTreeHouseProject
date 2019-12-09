/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat



var quotes = [
  
  { 
    title: "by abc", 
    year: "123",
    source: "abc",
    citation: "citation1"
    
  },
  {
    title: "by abc1",
    source: "source1",
    year: "1234"
  },
];
  
  

/*** 
 * `quotes` array 
***/



  function getRandomQuote() {
  
 randomNum = Math.floor(Math.random() * quotes.length)
  return quotes[randomNum];
  
  }
/***

 * `getRandomQuote` function
***/


function printQuote() {
  var getRandomQuote= getRandomQuote()
  var HTML = ''
  
  HTML += "<p class="quote">" + [getRandomQuote.quote] + "</p>";

  HTML += "<p class="source">" + [getRandomQuote.source];
  if (getRandomQuote.citation)
  {
    
  HTML+= " <span class="citation">" + [getRandomQuote.citation] </span>
  }
  
  if (getRandomQuote.year) {
  <span class="year"> [getRandomQuote.citation] </span>
</p>
  
  }
/***
 * `printQuote` function
***/

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


console.log(printQuote());

document.getElementById('load-quote').addEventListener("click", printQuote, false);

