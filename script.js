// Show Alert based on Input
function welcomealert() {
  var username = document.querySelector("#username").value;
  var usernumberofspecies = document.querySelector(
    "#usernumberofspecies"
  ).value;
  if (usernumberofspecies > 0) {
    alert(
      "Kudos on knowing about " +
        usernumberofspecies +
        " species, " +
        username +
        "!!"
    );
  } else {
    alert("You gotta learn more about the ecosystem!");
  }
}

// Play Sound Button
function playsound() {
  var audio = new Audio("assets/animalsound.mp3");
  audio.play();
}

// Show individual Species
function showgiraffe() {
  var imgshow = document.querySelector("#giraffe");
  var btntext = document.querySelector("#giraffebtn");
  if (imgshow.style.visibility == "hidden") {
    imgshow.style.visibility = "visible";
    btntext.innerHTML = "Hide Giraffe";
  } else {
    imgshow.style.visibility = "hidden";
    btntext.innerHTML = "Show Giraffe";
  }
}

function showmonkey() {
  var imgshow = document.querySelector("#monkey");
  var btntext = document.querySelector("#monkeybtn");
  if (imgshow.style.visibility == "hidden") {
    imgshow.style.visibility = "visible";
    btntext.innerHTML = "Hide Monkey";
  } else {
    imgshow.style.visibility = "hidden";
    btntext.innerHTML = "Show Monkey";
  }
}

function showsloth() {
  var imgshow = document.querySelector("#sloth");
  var btntext = document.querySelector("#slothbtn");
  if (imgshow.style.visibility == "hidden") {
    imgshow.style.visibility = "visible";
    btntext.innerHTML = "Hide Sloth";
  } else {
    imgshow.style.visibility = "hidden";
    btntext.innerHTML = "Show Sloth";
  }
}

// Show group of Pokemons
function showp() {
  var imgshow = document.querySelectorAll(".pspecies");
  var btntext = document.querySelector("#pspeciesbtn");
  for (let i = 0; i < imgshow.length; i++) {
    if (imgshow[i].style.visibility == "hidden") {
      imgshow[i].style.visibility = "visible";
      btntext.innerHTML = "Hide Species";
    } else {
      imgshow[i].style.visibility = "hidden";
      btntext.innerHTML = `Show 3 Species starting with "P"`;
    }
  }
}

// Flashcard Page Variables
var defshow = document.querySelector("#flashcard-definition");
var termshow = document.querySelector("#flashcard-term");

// Flascard Content
let flashcards = {
    "A symbiotic relationship in which both species benefit from the association(win/win)": "Mutualism",
    "Any relationship in which two species live closely and interact": "Symbiosis",
    "Occurs when one species benefits from the association while the other is neither helped nor harmed(win/whatever)": "Commensalism",
    "Occurs when one organism lives on or inside another organism and harms it (win/lose)": "Parasitism",
    "An organism that eats other organisms to live.": "Predator",
    "The organism that gets eaten.": "Prey",
    "A group of ecosystems that have the same climate and similar communities of plants and animals": "Biome",
    "All living organisms in an area": "Community",
    "A group of the same species of organisms living in an area": "Population",
    "Everything that surrounds an organism and influences it.": "Environment"
};

data = Object.entries(flashcards);

function getRandom() {
  let randomterm = data[Math.floor(Math.random() * data.length)];
  defshow.innerHTML = `<p>${randomterm[0]}</p>`;
  termshow.innerHTML = `<h2>${randomterm[1]}</h2>`;
}

// Show and Hide Flashcard Term
function showterm() {
  var flashtermbtn = document.querySelector("#flash-term-btn");
  if (termshow.style.visibility == "hidden") {
    termshow.style.visibility = "visible";
    flashtermbtn.innerHTML = `Hide Answer`;
  } else {
    termshow.style.visibility = "hidden";
    flashtermbtn.innerHTML = `Show Answer`;
  }
}
