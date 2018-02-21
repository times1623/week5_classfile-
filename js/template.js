(() => {
    // Variables always go at the top of the file

    var words = ["party","javascript","vampire","pancake",
    "hockey"];

    //storing the random word in a variable
    let currentWord =
    words[Math.floor(Math.random()*words.length)],
    wordHint = document.querySelector('.current-word'),
    guessBox = document.querySelector('.letter-guess');

    wordHint.textContent = currentWord.split("").map(letter => letter =
    "_").join(" ");

    debugger;
    //function go in the middle(logic,etc)
    function makeGuess() {
      //debuger;
      console.log(this.value);
    }


    //Event handling goes at the bottom
    guessBox.addEventListenr('keyup',makeGuess);

    // When we start the game or retarted, do these things
    function init() {
      //generate a random number and grab the word that correspends to it in the  word array.
      var random = Math.random();
      debugger;


    }

    init();
})();
