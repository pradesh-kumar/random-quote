oldVal="";
var quotes = [{
    "id": "1",
    "quote": "You are born into genius, but have you resigned yourself to mediocrity?"
  },
  {
    "id": "2",
    "quote": "Great achievement always requires great sacrifice"
  },
  {
    "id": "3",
    "quote": "Greatness begins beyond your comfort zone."
  },
  {
    "id": "4",
    "quote": "Having talent is fantastic. Having confidence is even more important."
  },
  {
    "id": "5",
    "quote": "Today’s a great day to behave as the person you’ve always wanted to be."
  }, {
    "id": "6",
    "quote": "Life is short. Do big things."
  }, {
    "id": "7",
    "quote": "Ordinary people love entertainment. Extraordinary people adore education."
  },{
    "id": "8",
    "quote": "Dream Big. Start small. Act now."
  },{
    "id": "9",
    "quote": "Victims make excuses. Leaders deliver results."
  }, {
    "id": "10",
    "quote": "Clarity breeds mastery."
  }, {
    "id": "11",
    "quote": "Education is inoculation against disruption."
  }, {
    "id": "12",
    "quote": "A problem is only a problem when viewed as a problem."
  }, {
    "id": "13",
    "quote": "Criticism is the price of ambition."
  }, {
    "id": "14",
    "quote": "Potential unexpressed turns to pain."
  },{
    "id": "15",
    "quote": "Your daily behavior reveals your deepest beliefs."
  },{
    "id": "16",
    "quote": "The only failure is not trying."
  },{
    "id": "17",
    "quote": "Focus is more valuable than IQ."
  },{
    "id": "18",
    "quote": "To double your income, triple your investment in self-development."
  },{
    "id": "19",
    "quote": "Life is short. Be of use."
  },{
    "id": "20",
    "quote": "Potential unexpressed turns to pain."
  }

];


$(document).ready(function() {

generateRandomNumber();


$("#button").on("click", function() {
  generateRandomNumber();
});

});


function generateRandomNumber() {
  var randomNum = Math.floor(Math.random() * 20);

  if(randomNum !== oldVal){
    oldVal = randomNum;
    generateQuote(randomNum);
  }
  else{
    generateRandomNumber();
  }
}


function generateQuote(randomNum) {

  var num = randomNum;

  $("#quote").html("&#8220;"+(quotes[num].quote)+"&#8221;");
  updateTweet(quotes[num].quote);
}



function updateTweet(val) {
  var thisQuote = val;
  $("#tweet_btn").attr("href", "https://twitter.com/intent/tweet?text=" + thisQuote + "%0a--- ");
}
