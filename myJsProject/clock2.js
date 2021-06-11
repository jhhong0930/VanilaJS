const clockContainer = document.querySelector(".clockContainer");
const clockTitle2 = clockContainer.querySelector(".clockTitle2");

function getTime() {
    const now = new Date();
    const monthArray = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC');
    const weekArray = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    const year = now.getFullYear();
    const month = monthArray[now.getMonth()];
    const day = now.getDate();
    const days = weekArray[now.getDay()];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    clockTitle2.innerText = `${days}, ${
        day < 10 ? `0${day}` : day
    } ${month} ${year}
    ${
        hours < 10 ? `0${hours}` : hours,
        hours < 12 ? hours : hours - 12
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    } ${
        hours < 12 ? `AM` : `PM`
    }`;
}

function init() {
    getTime();
    setInterval(getTime, 1);
}
init();