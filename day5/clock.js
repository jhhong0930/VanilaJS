// const clockContainer = document.querySelector(".js-clock"),
//     clockTitle = clockContainer.querySelector("h1");
// function getTime() {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     clockTitle.innerText = `${
//         hours < 10 ? `0${hours}` : hours
//     }:${
//         minutes < 10 ? `0${minutes}` : minutes
//     }:${
//         seconds < 10 ? `0${seconds}` : seconds
//     }`;
// }
// function init() {
//     getTime();
//     setInterval(getTime, 1);
// }
// init();

const clockTitle = document.querySelector("h2");

function getTime() {
    const christmas = new Date("december 24, 2021"); //KST
    const now = new Date();
    const dDay = christmas - now;

    const days = Math.floor(dDay / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dDay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dDay % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dDay % (1000 * 60)) / 1000);

    clockTitle.innerText = 
    `${
        days < 10 ? `0${days}` : days
    }d ${
        hours < 10 ? `0${hours}` : hours
    }h ${
        minutes < 10 ? `0${minutes}` : minutes
    }m ${
        seconds < 10 ? `0${seconds}` : seconds
    }s`;
}

function init() {
    getTime();
    setInterval(getTime, 1);
    // I found some interesting things
    // once I put msec while setting interval, there's a little gap changing(reload on the brower?) time compare with clock in computer
    // but when I put 1(sec) instead, it changes exactly same as computer's default digital clock
}

init();

/*
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:23:59:59+0900");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  const x_year = xmasDay.getFullYear();
  const x_month = xmasDay.getMonth();
  const x_day = xmasDay.getDay();
  const x_hours = xmasDay.getHours();
  const x_minutes = xmasDay.getMinutes();
  const x_seconds = xmasDay.getSeconds();

  clockTitle.innerText =
    "Time Until Christmas \n" +
    `${x_month - month} month ${x_day - day} day ${x_hours - hours} hour ${
      x_minutes - minutes
    } min ${x_seconds - seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
*/