/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let icons = ["♥", "♠", "♣", "♦"];
let card_numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

window.onload = function() {
  //write your code here
  // creacion body
  const body = document.body;
  body.style.background = "green";

  const card = document.createElement("DIV");
  card.classList.add("card");
  body.append(card);

  //creacion div sup-izq
  const UpLeft = document.createElement("DIV");
  const Center = document.createElement("DIV");
  const DownRight = document.createElement("DIV");

  UpLeft.classList.add("UpLeft");
  Center.classList.add("Center");
  DownRight.classList.add("DownRight");

  UpLeft.innerHTML = icons[getRandom(icons.length)];
  Center.innerHTML = card_numbers[getRandom(card_numbers.length)];
  DownRight.innerHTML = icons[getRandom(icons.length)];
  card.append(UpLeft);
  card.append(Center);
  card.append(DownRight);
};

function getRandom(arrayLength) {
  let number = Math.floor(Math.random() * arrayLength);
  return number;
}
