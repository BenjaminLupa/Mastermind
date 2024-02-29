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

    for (let i = 1; i <= codeLength; i++) {
      let div_l = document.createElement("div");
      let div_r = document.createElement("div");
      divLeft.append(div_l);
      divRight.append(div_r);
    }
    divTry.append(divLeft);
    divTry.append(divRight);
    main_display.prepend(divTry);
  }
  //Code Eingabe
  for (let i = 1; i <= codeLength; i++) {
    let div_select_wrapper = document.createElement("div");
    div_select_wrapper.setAttribute("class", "select-wrapper");
    let select = document.createElement("select");

    //Farben
    for (const color of colors) {
      let option = document.createElement("option");
      option.setAttribute("style", "background-color:" + color);
      option.setAttribute("value", color);
      select.append(option);
    }

    select.setAttribute("style", "background-color:" + colors[0]);

    select.addEventListener("change", (e) => {
      e.target.setAttribute("style", "background-color:" + e.target.value);
    });

    div_select_wrapper.append(select);
    div_select_colors.append(div_select_wrapper);
  }
}

init();
