import "./style/main.css";
let countryArr = [
  "egypt",
  "sudan",
  "italy",
  "nepal",
  "kenya",
  "spain",
  "china",
  "niger",
  "syria",
  "tonga",
  "gabon",
];

var country = countryArr[Math.floor(Math.random() * 11)];
console.log(country);
var correctArr = [];
var live = 0;

document.addEventListener("click", function (event) {
  if (event.target.className == "keys") {
    // CORRECT OPTION

    if (country.includes(event.target.id)) {
      document.getElementById(event.target.id).classList.add("correctletter");

      let put = country.indexOf(event.target.id);
      correctArr.push(event.target.id);
      document.getElementById(put).innerHTML = event.target.id;
    }
    // INCORRECT OPTION
    else {
      document.getElementById(event.target.id).classList.add("inCorrectletter");
      live = live + 1;
      document.getElementById(`figure-body-${live}`).style.display = "block";
    }
    if (live == 6) {
      document.getElementById("gameOver").style.display = "block";
      document.getElementById("choose").style.display = "none";
    }
    if (live != 6 && correctArr.length == 5) {
      document.getElementById("youWin").style.display = "block";
      document.getElementById("choose").style.display = "none";
    }
  }
});

// PLAY AGAIN FUNCTIONALITY
document.getElementById("playAgain").addEventListener("click", function () {
  document.getElementById("gameOver").style.display = "none";
  document.querySelectorAll(".keys").forEach((item) => {
    item.classList.remove("correctletter");
    item.classList.remove("inCorrectletter");
  });
  document.querySelectorAll(".title").forEach((item) => {
    item.innerHTML = "";
  });
  document.querySelectorAll("[id^=figure-body]").forEach((item) => {
    item.style.display = "none";
  });
  document.getElementById("choose").style.display = "block";

  live = 0;
  country = countryArr[Math.floor(Math.random() * 11)];
  console.log(country);
  correctArr = [];
});

document.getElementById("play").addEventListener("click", function () {
  document.getElementById("youWin").style.display = "none";
  document.querySelectorAll(".keys").forEach((item) => {
    item.classList.remove("correctletter");
    item.classList.remove("inCorrectletter");
  });
  document.querySelectorAll(".title").forEach((item) => {
    item.innerHTML = "";
  });
  document.getElementById("choose").style.display = "block";

  document.querySelectorAll("[id^=figure-body]").forEach((item) => {
    item.style.display = "none";
  });
  live = 0;
  country = countryArr[Math.floor(Math.random() * 11)];
  correctArr = [];
  console.log(country);
});
