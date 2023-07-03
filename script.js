
const seconds = document.getElementById("hand-seconds");
const minutes = document.getElementById("hand-minutes");
const hours = document.getElementById("hand-hours");

setInterval(getClock, 1000);
getClock();

function getClock() {
    let date = new Date(),
        second = date.getSeconds() / 60 * 360,
        minute = date.getMinutes() / 60 * 360,
        hour = date.getHours() / 12 * 360;

    seconds.style.transform = `rotate(${second}deg)`;
    minutes.style.transform = `rotate(${minute}deg)`;
    hours.style.transform = `rotate(${hour}deg)`;

}

const changeColor = document.querySelector(".darkmode");
const clock = document.getElementById("clock");

changeColor.addEventListener("click", (e) => {
    e.preventDefault();
    clock.style.backgroundColor = "teal";
    clock.style.border = "1px solid white";
    clock.style.borderWidth = "5px";
    clock.classList.toggle("active");
    clock.classList.toggle('isactive');
    clock.classList.toggle('change');
});


