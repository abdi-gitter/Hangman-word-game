// app.js
document.addEventListener('DOMContentLoaded', () => {
    const words = ['javascript', 'programming', 'hangman', 'coding', 'website'];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let remainingLives = 6;
    let usedCharacters = [];
    let wordStatus = null;
  
    function initialize() {
      document.getElementById('remainingLives').innerText = remainingLives;
      document.getElementById('usedCharacters').innerText = usedCharacters.join(', ');
      document.getElementById('word-display').innerText = '_ '.repeat(selectedWord.length);
    }
  
    function updateWordDisplay() {
      wordStatus = selectedWord.split('').map(letter => (usedCharacters.indexOf(letter) >= 0 ? letter : '_')).join('');
      document.getElementById('word-display').innerText = wordStatus.split('').join(' ');
    }
  
    function updateGameState() {
      document.getElementById('remainingLives').innerText = remainingLives;
      document.getElementById('usedCharacters').innerText = usedCharacters.join(', ');
  
      if (remainingLives <= 0) {
        document.getElementById('message').innerText = 'Game Over!';
        document.getElementById('guessButton').disabled = true;
      } else if (wordStatus === selectedWord) {
        document.getElementById('message').innerText = 'Congratulations! You won!';
        document.getElementById('guessButton').disabled = true;
      }
    }
  
    function guessLetter() {
      let userInput = document.getElementById('userInput').value.toLowerCase();
      document.getElementById('userInput').value = '';
  
      if (usedCharacters.indexOf(userInput) === -1) {
        usedCharacters.push(userInput);
        if (selectedWord.indexOf(userInput) >= 0) {
          updateWordDisplay();
        } else {
          remainingLives--;
        }
      } else {
        document.getElementById('message').innerText = 'You already guessed that letter.';
      }
  
      updateGameState();
    }
  
    document.getElementById('guessButton').addEventListener('click', guessLetter);
  
    document.getElementById('newGameButton').addEventListener('click', () => {
      selectedWord = words[Math.floor(Math.random() * words.length)];
      remainingLives = 6;
      usedCharacters = [];
      document.getElementById('guessButton').disabled = false;
      document.getElementById('message').innerText = '';
      initialize();
    });
  
    initialize();
  });
  