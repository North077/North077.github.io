// Get dom elements

const days = document.querySelector("#cnt-days");

const hours = document.querySelector("#cnt-hours");

const mins = document.querySelector("#cnt-mins");

const secs = document.querySelector("#cnt-secs");

const motiv = document.querySelector("#motivation-instruction");

const motivPanel = document.querySelector("#motivationPanel");

const timeStamp = document.querySelector("#time-stamp");

window.quotes = [

  {

    author: null,

    quote: "Error loading json file.",

  },

];

// Motivation mode

fetch("/motivation.json")

  .then((response) => response.json())

  .then((json) => {

    window.quotes = json.motivation;

    let index = ~~(Math.random() * window.quotes.length);

    

    window.addEventListener("click", () => {

      // cycle through the array

      index = (index + 1) % window.quotes.length;

     

      data = window.quotes[index];

      

      motivPanel.innerHTML = `

       ${data.quote} <br /><br />

        - ${data.author} -

      `;

      

    });

  });

motiv.addEventListener("click", () => {

  if (!window.mModeEnabled) window.mModeEnabled = true;

  else window.mModeEnabled = false;

  motivationMode(window.mModeEnabled);

});

function motivationMode(flag) {

  if (flag) {

    document.body.style.overflow = "hidden";

    timeStamp.style.display = "none";

    motiv.innerText = "Click anywhere for more";

    setTimeout(() => {

      motiv.innerText = "Exit motivation mode";

    }, 2000);

    // activate the motivation panel

    motivPanel.style.display = "block";

    // get random position from array

    let index = Math.random() * window.quotes.length;

    window.addEventListener("click", () => {

      motivate(index);

      // cycle through the array

      index++;

      if (index === window.quotes.length) {

        index = 0;

      }

    });

    return;

  }

  document.body.style.overflow = "visible";

  timeStamp.style.display = "block";

  motivPanel.style.display = "none";

  motiv.innerText = "I need motivation";

}

function motivate(data) {}

// Scroll on animation

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    } else {

      entry.target.classList.remove("show");

    }

  });

});

const elements = document.querySelectorAll(".count");

elements.forEach((el) => observer.observe(el));

const ExamStart = new Date(2023, 1, 20, 13, 30, 0);

let interval = 100;

setInterval(() => {

  const currentDate = new Date();

  const deltaMS = ExamStart - currentDate;

  const deltaS = deltaMS / 1000;

  const deltaM = deltaS / 60;

  const deltaH = deltaM / 60;

  const deltaD = deltaH / 24;

  const _days = Math.floor(deltaD);

  const _hours = Math.floor(deltaH % 24);

  const _minutes = Math.floor(deltaM % 60);

  const _seconds = Math.floor(deltaS % 60);

  // update dom

  days.innerText = `${_days} days,`;

  hours.innerText = `${_hours} hours,`;

  mins.innerText = `${_minutes} minutes,`;

  secs.innerText = `${_seconds} seconds.`;

}, interval);

