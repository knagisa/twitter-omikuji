const display = document.getElementById("display")
const button = document.getElementById("button")

// const omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶"]
const omikuji = ["芸術A", "歴史学A", "外国語への招待2", "言語と文化", "哲学A", "文学A", "宗教学A", "人間文化論A", 
                 "法学A", "心理学A", "現代社会の課題とコミュニケーション", "Southeast Asia", "政治学", "ファッション論", "メディア論", 
                 "科学技術倫理A", "社会モデリングA", "Thinking and learning through meseums", "科学史A", "技術史A", "科学哲学A", "言語学A", "Technology and art", "未来デザイン入門"];

let omikujiId;
let i = 0;
let isRunning = true;

const update = function() {
  omikujiId = setTimeout(function() {
    // console.log(omikuji[i]);
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
