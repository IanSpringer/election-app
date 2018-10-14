const entry = document.querySelector('.js-entry-point');
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

// runTime()
setInterval(runTime, 1000)
