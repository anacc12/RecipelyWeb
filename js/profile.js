var x = document.createElement("script");
x.src = "../js/main.js";
document.getElementsByTagName("head")[0].appendChild(x);

console.log(x);

var navRecipes = document.querySelector(".nav-logout");
navRecipes.addEventListener("click", function () {
  window.open("../php/logout.php", "_self");
});

var exploreBtn = document.querySelector(".nav-explore");
var categoriesTitle = document.querySelector("#categories-title");
var browse = document.querySelector("#browse");
var showRecipes = document.querySelector(".show-recipes");
var addBtn = document.querySelector(".add-recipe");
var addBtn2 = document.querySelector(".add-recipe-second");
var addBtnMobile = document.querySelector(".mobile-text .add-recipe");
var closeBtn = document.querySelector("#text .fa");

exploreBtn.addEventListener("click", function () {
  categoriesTitle.style.display = "block";
  browse.style.display = "block";
});

addBtn.addEventListener("click", function () {
  window.open("../html/add-recipe.html", "_self");
});

addBtn2.addEventListener("click", function () {
  window.open("../html/add-recipe.html", "_self");
});

addBtnMobile.addEventListener("click", function () {
  window.open("../html/add-recipe.html", "_self");
});

closeBtn.addEventListener("click", function () {
  window.open("../index.html", "_self");
});
