// EXERCISE 2

let seconds = 0;
let minutes = 0;
let hours = 0;

function countTime() {
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  } else if (minutes >= 60) {
    hours++;
    minutes = 0;
  }
  console.log(`${hours} : ${minutes} : ${seconds}`);
}

setInterval(countTime, 1000);
