// setTimeout(() => {
//     console.log("1 second");
// }, 0)
// setTimeout(() => {
//     console.log("4 second");
// }, 4000)
// setTimeout(() => {
//     console.log("2 second");
// }, 2000)
// setTimeout(() => {
//     console.log("8 second");
// }, 8000)
// setTimeout(() => {
//     console.log("5 second");
// }, 5000)

// for (let i = 0; i < 1500; i++) {
//     console.log(`Вивід у циклі ${i}`);
// }

// console.log("aaa");
// console.log("bbb");
// console.log("ccc");
// console.log("ddd");
// console.log("eee");
// console.log("fff");


// Task 1
const text = document.querySelector("#text");
// const button = document.querySelector("#click")
const masive = ["Thanks", "LOL", "Hi Walter", "White", "I love FRONTEND!!!"];
let index = 0;

const id = setInterval(() => {
    text.textContent = masive[index];
    index += 1;
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);

// Task 2


const div = document.querySelector("#styleBlock");
const colors = ["blue", "red", "black", "white", "aqua", "gold", "yellow", "tomato"];
const font = [20, 40, 60, 70, 10, 80, 40, 60];

let inex = 0;
setInterval(() => {
    div.style.background = colors[inex];
    div.style.fontSize = font[inex] + "px";
    inex += 1;
    if (inex >= colors.length) {
        inex = 0;
    }
}, 1000);

// Task 3
    const circle = document.getElementById('circle');
    const scoreEl = document.getElementById('score');
    const timeEl = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');

    let score = 0;
    let time = 10;
    let gameInterval;
    let moveInterval;

    function startGame() {
        score = 0;
        time = 10;
        scoreEl.textContent = `Очки: ${score}`;
        timeEl.textContent = `Час: ${time}`;
        startBtn.style.display = 'none';
        circle.style.display = 'block';

        moveInterval = setInterval(moveCircle, 800);

        gameInterval = setInterval(() => {
            time--;
            timeEl.textContent = `Час: ${time}`;
            if (time <= 0) {
                endGame();
            }
        }, 1000);
    }

    function moveCircle() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    }

    function endGame() {
        clearInterval(gameInterval);
        clearInterval(moveInterval);
        circle.style.display = 'none';
        startBtn.style.display = 'inline-block';
        alert(`Гру завершено! Твої очки: ${score}`);
    }

    circle.addEventListener('click', () => {
        score++;
        scoreEl.textContent = `Очки: ${score}`;
        moveCircle(); 
    });

    startBtn.addEventListener('click', startGame);
// Task 4

const countdown = document.querySelector("#countdown");
const countdownStart = document.querySelector("#countdownStart");

const countdownStartFunc = function (mins, seconds, elements) {
  const startMins = mins;
  const startSeconds = seconds;
  let total = mins * 60 + seconds;
  console.log(total);
  const display = document.querySelector(`#${elements}`);
  // console.log(display);
  const id = setInterval(() => {
    let m = Math.floor(total / 60);
    console.log(m);
    let s = total % 60;
    display.textContent = `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
    if (total <= 0) {
      clearInterval(id);
      const repeat = confirm("Ви хочете повторити час?");
      if (repeat === true) {
        alert("ok");
        countdownStartFunc(startMins, startSeconds, elements);
      } else {
        alert("Ok Your choise!!!");
      }
    }
    total -= 1;
  }, 1000);
};

countdownStart.addEventListener("click", () => {
  const userMins = Number(prompt("На скільки хвилин поставити таймер?"));
  const seconds = Number(prompt("На скільки секунд поставити таймер?"));
  if (isNaN(userMins) && isNaN(seconds)) {
    alert("Повторіть спробу!");
  } else {
    countdownStartFunc(userMins, seconds, "countdown");
  }
});
