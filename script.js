const main_display = document.querySelector("main");
const div_select_colors = document.querySelector("#div-select-color");
const crack_button = document.querySelector("crack-btn");

let codeLength = 4;
let trys = 8;
let colors = ["blue", "yellow", "orange", "green", "violet", "purple"];

let randomCode = [];
let crackTry = 1;
