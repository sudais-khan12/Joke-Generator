let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,explicit&type=single";

let button = document.querySelector("button");
let joke = document.querySelector("p");
let emoji = document.querySelector("span");
let shadow = document.querySelector(".wraper");
let btn1 = document.querySelector(".input");
let body = document.querySelector("body");
let loader = document.querySelector(".hide");
let mode = true;

async function getJoke() {
  let emojii = genEmoji();
  let promise = await fetch(url);
  let data = await promise.json();
  console.log(data);
  joke.innerHTML = data.joke;
  emoji.innerHTML = emojii;
  loader.style.display = "none";
}

let darkMode = () => {
  if (mode) {
    body.style.backgroundColor = "rgb(50, 46, 46)";
    shadow.classList.add("change");
    mode = false;
  } else {
    body.style.backgroundColor = "#BCAA99";
    shadow.classList.remove("change");
    mode = true;
  }
};

let genEmoji = () => {
  let em = [
    "&#128516;",
    "&#128513;",
    "&#128514;",
    "&#128515;",
    "&#128516;",
    "&#128517;",
  ];
  let num = Math.floor(Math.random() * 5);
  return em[num];
};

button.addEventListener("click", () => {
  getJoke();
  loader.style.display = "block";
});

btn1.addEventListener("click", () => {
  darkMode();
});
