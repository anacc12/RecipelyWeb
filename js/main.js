window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 3,
    draggable: true,
    dots: "#dots",
  });

  new Glider(document.querySelector("#meals .glider-contain .glider"), {
    slidesToShow: 3,
    draggable: true,
    dots: "#meals .glider-contain #dots",
  });
});

var mealsGlider = console.log("Glider added");
var categoryName;
var mealID;
var mealTitle = document.querySelector("#recipe .meals-title");
var ingredientDiv1 = document.createElement("div");
var ingredientDiv2 = document.createElement("div");
var ingredientDiv3 = document.createElement("div");
var ingredientDiv4 = document.createElement("div");
var ingredientDiv5 = document.createElement("div");
var ingredientDiv6 = document.createElement("div");
var ingredientDiv7 = document.createElement("div");
var ingredientDiv8 = document.createElement("div");
var ingredientDiv9 = document.createElement("div");
var ingredientDiv10 = document.createElement("div");
var ingredientDiv11 = document.createElement("div");
var ingredientDiv12 = document.createElement("div");
var ingredientDiv13 = document.createElement("div");
var ingredientDiv14 = document.createElement("div");
var ingredientDiv15 = document.createElement("div");
var ingredientDiv16 = document.createElement("div");
var ingredientDiv17 = document.createElement("div");
var ingredientDiv18 = document.createElement("div");
var ingredientDiv19 = document.createElement("div");
var ingredientDiv20 = document.createElement("div");

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    var categories = data.categories;

    categories.map((category) => {
      var div = document.createElement("div");
      console.log("Filling glider 1");
      var gliderHtml = document.querySelector(".glider .glider-track");
      var gliderDiv = gliderHtml.appendChild(div);
      Glider(document.querySelector(".glider")).refresh();
      gliderDiv.innerHTML = category.strCategory;

      gliderDiv.addEventListener("click", function () {
        categoryName = gliderDiv.innerHTML;
        fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName
        )
          .then((response) => response.json())
          .then((data) => {
            document.querySelector("#meals").style.display = "block";
            document.querySelector("#meals").setAttribute("data-scroll", "");
            window.location.href = "#meals";
            var gliderHtml = document.querySelector(
              "#meals .glider-contain .glider .glider-track"
            );
            gliderHtml.innerHTML = "";

            var meals = data.meals;

            meals.map((meal) => {
              var div = document.createElement("div");

              var gliderDiv = gliderHtml.appendChild(div);
              gliderDiv.innerHTML = meal.strMeal;

              var mealsTitle = document.querySelector(".meals-title");
              Glider(
                document.querySelector("#meals .glider-contain .glider")
              ).refresh();
              mealsTitle.innerHTML = categoryName;

              gliderDiv.addEventListener("click", function () {
                mealID = meal.idMeal;
                var id = mealID;
                console.log(mealID);
                fetch(
                  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
                )
                  .then((response) => response.json())
                  .then((data) => {
                    document.querySelector("#recipe").style.display = "block";
                    document
                      .querySelector("#recipe")
                      .setAttribute("data-scroll", "");
                    window.location.href = "#recipe";

                    var recipe = data.meals[0];

                    mealTitle.innerHTML = recipe.strMeal;

                    var instructionsDiv = document.createElement("div");
                    var instructions = document.querySelector(".instructions");
                    var instructionsHtmlDiv = instructions.appendChild(
                      instructionsDiv
                    );

                    instructionsHtmlDiv.innerHTML = recipe.strInstructions;

                    var ingredients1 = recipe.strIngredient1;
                    var ingredients2 = recipe.strIngredient2;
                    var ingredients3 = recipe.strIngredient3;
                    var ingredients4 = recipe.strIngredient4;
                    var ingredients5 = recipe.strIngredient5;
                    var ingredients6 = recipe.strIngredient6;
                    var ingredients7 = recipe.strIngredient7;
                    var ingredients8 = recipe.strIngredient8;
                    var ingredients9 = recipe.strIngredient9;
                    var ingredients10 = recipe.strIngredient10;
                    var ingredients11 = recipe.strIngredient11;
                    var ingredients12 = recipe.strIngredient12;
                    var ingredients13 = recipe.strIngredient13;
                    var ingredients14 = recipe.strIngredient14;
                    var ingredients15 = recipe.strIngredient15;
                    var ingredients16 = recipe.strIngredient16;
                    var ingredients17 = recipe.strIngredient17;
                    var ingredients18 = recipe.strIngredient18;
                    var ingredients19 = recipe.strIngredient19;
                    var ingredients20 = recipe.strIngredient20;

                    var ingredients = document.querySelector(".ingredients");

                    if (
                      ingredients1 != null &&
                      ingredients1 != "" &&
                      ingredients1 != " "
                    ) {
                      ingredientDiv1.innerHTML = ingredients1;
                      ingredients.append(ingredientDiv1);
                    }

                    if (
                      ingredients2 != null &&
                      ingredients2 != "" &&
                      ingredients2 != " "
                    ) {
                      ingredientDiv2.innerHTML = ingredients2;
                      ingredients.append(ingredientDiv2);
                    }

                    if (
                      ingredients3 != null &&
                      ingredients3 != "" &&
                      ingredients3 != " "
                    ) {
                      ingredientDiv3.innerHTML = ingredients3;
                      ingredients.append(ingredientDiv3);
                    }

                    if (
                      ingredients4 != null &&
                      ingredients4 != "" &&
                      ingredients4 != " "
                    ) {
                      ingredientDiv4.innerHTML = ingredients4;
                      ingredients.append(ingredientDiv4);
                    }

                    if (
                      ingredients5 != null &&
                      ingredients5 != "" &&
                      ingredients5 != " "
                    ) {
                      ingredientDiv5.innerHTML = ingredients5;
                      ingredients.append(ingredientDiv5);
                    }

                    if (
                      ingredients6 != null &&
                      ingredients6 != "" &&
                      ingredients6 != " "
                    ) {
                      ingredientDiv6.innerHTML = ingredients6;
                      ingredients.append(ingredientDiv6);
                    }

                    if (
                      ingredients7 != null &&
                      ingredients7 != "" &&
                      ingredients7 != " "
                    ) {
                      ingredientDiv7.innerHTML = ingredients7;
                      ingredients.append(ingredientDiv7);
                    }

                    if (
                      ingredients8 != null &&
                      ingredients8 != "" &&
                      ingredients8 != " "
                    ) {
                      ingredientDiv8.innerHTML = ingredients8;
                      ingredients.append(ingredientDiv8);
                    }

                    if (
                      ingredients9 != null &&
                      ingredients9 != "" &&
                      ingredients9 != " "
                    ) {
                      ingredientDiv9.innerHTML = ingredients9;
                      ingredients.append(ingredientDiv9);
                    }

                    if (
                      ingredients10 != null &&
                      ingredients10 != "" &&
                      ingredients10 != " "
                    ) {
                      ingredientDiv10.innerHTML = ingredients10;
                      ingredients.append(ingredientDiv10);
                    }

                    if (
                      ingredients11 != null &&
                      ingredients11 != "" &&
                      ingredients11 != " "
                    ) {
                      ingredientDiv11.innerHTML = ingredients11;
                      ingredients.append(ingredientDiv11);
                    }

                    if (
                      ingredients12 != null &&
                      ingredients12 != "" &&
                      ingredients12 != " "
                    ) {
                      ingredientDiv12.innerHTML = ingredients12;
                      ingredients.append(ingredientDiv12);
                    }

                    if (
                      ingredients13 != null &&
                      ingredients13 != "" &&
                      ingredients13 != " "
                    ) {
                      ingredientDiv13.innerHTML = ingredients13;
                      ingredients.append(ingredientDiv13);
                    }

                    if (
                      ingredients14 != null &&
                      ingredients14 != "" &&
                      ingredients14 != " "
                    ) {
                      ingredientDiv14.innerHTML = ingredients14;
                      ingredients.append(ingredientDiv14);
                    }

                    if (
                      ingredients15 != null &&
                      ingredients15 != "" &&
                      ingredients15 != " "
                    ) {
                      ingredientDiv15.innerHTML = ingredients15;
                      ingredients.append(ingredientDiv15);
                    }

                    if (
                      ingredients16 != null &&
                      ingredients16 != "" &&
                      ingredients16 != " "
                    ) {
                      ingredientDiv16.innerHTML = ingredients16;
                      ingredients.append(ingredientDiv16);
                    }

                    if (
                      ingredients17 != null &&
                      ingredients17 != "" &&
                      ingredients17 != " "
                    ) {
                      ingredientDiv17.innerHTML = ingredients17;
                      ingredients.append(ingredientDiv17);
                    }

                    if (
                      ingredients18 != null &&
                      ingredients18 != "" &&
                      ingredients18 != " "
                    ) {
                      ingredientDiv18.innerHTML = ingredients18;
                      ingredients.append(ingredientDiv18);
                    }

                    if (
                      ingredients19 != null &&
                      ingredients19 != "" &&
                      ingredients19 != " "
                    ) {
                      ingredientDiv19.innerHTML = ingredients19;
                      ingredients.append(ingredientDiv19);
                    }

                    if (
                      ingredients20 != null &&
                      ingredients20 != "" &&
                      ingredients20 != " "
                    ) {
                      ingredientDiv20.innerHTML = ingredients20;
                      ingredients.append(ingredientDiv20);
                    }
                  });
              });
            });
          });
      });
    });
  });

const signInBtn = document.querySelector(".signIn");
const signUpBtn = document.querySelector(".register");
const signUpBtnMobile = document.querySelector(".mobile-text .register");
const signUpBtn2 = document.querySelector(".second-register");

signInBtn.addEventListener("click", function () {
  window.open("./html/reg.html", "_self");
});

signUpBtn.addEventListener("click", function () {
  window.open("./html/reg.html", "_self");
});

signUpBtnMobile.addEventListener("click", function () {
  window.open("./html/reg.html", "_self");
});

signUpBtn2.addEventListener("click", function () {
  window.open("./html/reg.html", "_self");
});
