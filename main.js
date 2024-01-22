const word  = prompt("Sözü daxil edin")
const letter = prompt("Hərfi daxil edin")
function searchLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        return "Hərf var";
      }
    }
    return "Hərf yoxdur";
  }
  
  console.log(searchLetter(word, letter));