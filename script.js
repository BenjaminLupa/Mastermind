const main_display = document.querySelector("main");
const div_select_colors = document.querySelector("#div-select-color");
const crack_button = document.querySelector("crack-btn");

let codeLength = 4;
let trys = 8;
let colors = ["blue", "yellow", "orange", "green", "violet", "purple"];

let randomCode = [];
let crackTry = 1;

function init() {
  randomCode = [];
  crackTry = 1;
  main_display.innerHTML = "";
  div_select_colors.innerHTML = "";

  //Versuche
  for (let i = 1; i <= trys; i++) {
    let divTry = document.createElement("div");
    divTry.setAttribute("id", "try-" + i);
    divTry.setAttribute("class", "try");

    let divLeft = document.createElement("div");
    divLeft.setAttribute("class", "left");

    let divRight = document.createElement("div");
    divRight.setAttribute("class", "right");
  }
}
