const clockContainer = document.querySelector(".clockContainer");
const timeNow = clockContainer.querySelector(".timeNow");
const dateNow = clockContainer.querySelector(".dateNow");

const now = new Date();
const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const days = week[now.getDay()];
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    timeNow.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function getDate() {
    const now = new Date();
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const days = week[now.getDay()];

    dateNow.innerText = `${
        year
    }년 ${
        month < 10 ? `0${month}` : month
    }월 ${
        day < 10 ? `0${day}` : day
    }일 ${
        days
    }`;

}




// function getTime() {
//     const now = new Date();
//     const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
//     const year = now.getFullYear();
//     const month = now.getMonth();
//     const day = now.getDate();
//     const days = week[now.getDay()];
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     clockTitle1.innerText = `${year}년 ${
//         month < 10 ? `0${month}` : month
//     }월 ${
//         day < 10 ? `0${day}` : day
//     }일 ${
//         days
//     }
//     ${
//         hours < 10 ? `0${hours}` : hours,
//         hours < 12 ? hours : hours - 12
//     }:${
//         minutes < 10 ? `0${minutes}` : minutes
//     }:${
//         seconds < 10 ? `0${seconds}` : seconds
//     } ${
//         hours < 12 ? `AM` : `PM`
//     }`;
// }

function init() {
    getTime();
    getDate();
    setInterval(getTime, 1);
}
init();