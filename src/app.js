/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// creacion body
const body = document.body;
body.style.background = "green";

const card = document.createElement("DIV");
card.classList.add("card");
body.append(card);

//creacion div sup-izq
const SupIzq = document.createElement("DIV");
const centro = document.createElement("DIV");
const inferiorDerecha = document.createElement("DIV");

SupIzq.classList.add("SupIzq");
centro.classList.add("centro");
inferiorDerecha.classList.add("inferiorDerecha");

SupIzq.innerHTML = "♣";
centro.innerHTML = "8";
inferiorDerecha.innerHTML = "♦";
card.append(SupIzq);
card.append(centro);
card.append(inferiorDerecha);
