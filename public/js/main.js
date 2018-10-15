// Cache DOM Elements
const timer = document.querySelector('.js-timer-wrap')
const entry = document.querySelector('.js-entry-point');

// Functions
const runTime = () => {

  let now = new Date().getTime();
  let election = new Date(2018, 10, 6, 0, 0, 0).getTime()
  let difference = election - now;
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
  let minutes = Math.floor((difference % (1000 * 60 * 60 )) / (1000 * 60))
  let seconds = Math.floor(((difference % (1000 * 60)) / 1000))
  let millis = Math.floor((difference % 10))
  const html = `
    <div class="timer__inner">
      <span>${days < 10 ? `0${days}` : days}</span>
      <span> ${hours < 10 ? `0${hours}` : hours}</span>
      <span> ${minutes < 10 ? `0${minutes}` : minutes}</span>
      <span> ${seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  `

  entry.innerHTML = html;
}

const transition = () => {
  timer.classList.add('slide-out')
}

const getPolls = () => {
  fetch('/polling')
  .then(function (response) {
    // handle success
    return response.json()
  })
  .then(function (myData) {
    console.log(myData)
    transition();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


// Call Functions
document.querySelector('.js-button').addEventListener('click', getPolls)
setInterval(runTime, 1000)


