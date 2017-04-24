(function() {
  // FizzBuzz exercise
  var count = function() {
    for (var i = 1; i < 101; i++) {
      // console.log(i);
      if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  };
  count();

// Greeting exercise
var sayHello = function(name) {
  this.name,
  console.log("Hello, this is " + name);  
  
}
sayHello("Roberto")

//quotes exercise
    var quotes = [
        "To be or not to be.",
        "Only I can change my life. No one can do it for me.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "Quality is not an act, it is a habit.",
        "If you can dream it you can do it.",
        "It always seems impossible until it's done.",
        "The secret of getting ahead is getting started.",
        "Love thou the rose, yet leave it on its stem.",
        "Happiness is good health and a bad memory.",
        "What I wanted to do was to paint sunlight on the side of a house.",
    ];
    
    var generateQuote = function () {
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        
        document.getElementById("quote").innerHTML = quote;
        
    }
    
    window.generateQuote = generateQuote;
    
  
   
    // document.write(quotes)
    
    
    
})();
