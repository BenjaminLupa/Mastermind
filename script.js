const main_display = document.querySelector("main");
const div_select_colors = document.querySelector("#div-select-color");
const crack_button = document.querySelector("#crack-btn");

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
  createRandomCode();
}

function createRandomCode() {
  for (let id = 0; id <= codeLength; id++) {
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    randomCode.push(random_color);
  }
}

crack_button.addEventListener("click", (e) => {
  let input_colors = document.querySelectorAll(".select-wrapper>select");
  let input_colors_arr = [];
  for (let v of input_colors) {
    input_colors_arr.push(v.value);
  }
  show("left", input_colors_arr);
  correctionArray = createCorrectionArray(input_colors_arr);
  show("right", correctionArray);
  crackTry++;
  checkWin(correctionArray);
});

function show(type, colors) {
  let tryView = document.querySelectorAll(
    "#try-" + crackTry + ">." + type + "div"
  );
  tryView.forEach((v, i) => {
    v.setAttribute("style", "background-color:" + colors[i]);
  });
}

function createCorrectionArray(input_colors_arr) {
  let random_code_copy = [...randomCode];
  let correctionArray = [];

  //Richtige Position
  for (const i in random_code_copy) {
    if (random_code_copy[i] == input_colors_arr[i]) {
      random_code_copy[i] = null;
      input_colors_arr[i] = null;
      correctionArray.push("red");
    }
  }

  //Falsche Position
  for (const i in random_code_copy) {
    for (const j in input_colors_arr) {
      if (
        random_code_copy[i] != null &&
        random_code_copy[i] == input_colors_arr[j]
      ) {
        random_code_copy[i] = null;
        input_colors_arr[j] = null;
        correctionArray.push("white");
      }
    }
  }
  return correctionArray;
}

function checkWin(correction_array) {
  let countCorrect = 0;
  for (let v of correction_array) {
    if (v == "red") {
      countCorrect++;
    }
  }
  if (countCorrect == codeLength) {
    alert("You Win");
    init();
  } else if (crackTry > trys) {
    alert("You Lose");
    init();
  }
}

init();
