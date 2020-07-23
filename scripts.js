const display = document.getElementById("display")
const button = document.getElementById("button")

const omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"]

let omikujiId;
let i = 0;
let isRunning = true;

const update = function() {
  omikujiId = setTimeout(function() {
    console.log(omikuji[i]);
    display.innerText = omikuji[i];
    i = i + 1 < omikuji.length ? i + 1 : 0;
    update();
  }, 100);
};

button.addEventListener('click', function() {
  if (isRunning) {
    clearTimeout(omikujiId);
    button.innerText = "もう１回";
  } else {
    update();
    button.innerText = "とめる";
  }
  isRunning = !isRunning;
});

update();
