/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["paint", "pissed", "crushed", "broked"];
  let action = ["my car", "my pizza", "my homework", "my laptop"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    action[actionIndex] +
    " " +
    when[whenIndex]
  );
};
