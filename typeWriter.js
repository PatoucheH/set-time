// EXERCISE 1

const word = "Wozniak";
let index = 0;

function typeWriter() {
  if (index < word.length) {
    console.log(word[index]);
    index++;
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(typeWriter, 1000);



