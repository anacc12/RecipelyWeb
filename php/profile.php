<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600&display=swap" rel="stylesheet" />
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recipely</title>
    <link rel="stylesheet" href="../css/profile.css" />
    <link rel="stylesheet" href="../css/glider.css" />
</head>

<body>
    <?php
    if (isset($_SESSION['success']) && $_SESSION['success'] == true) {
    ?>
        <section class="intro">
            <nav>
                <div class="nav-name">Recipely</div>
                <div class="nav-links">
                    <a href="#categories-title" class="nav-explore">Explore</a>
                    <a href="#" class="nav-logout">Log out</a>
                </div>
            </nav>


            <section class="content">
                <div class="row">
                    <div class="col-md-12 mobile-title">Personalized recipes.</div>
                </div>
                <div class="row">
                    <div class="col-md-6 content-illustration">
                        <img src="../images/illustration.svg" class="illustration" />
                    </div>
                    <div class="col-md-6 content-text">
                        <div>
                            <p class="title">Personalized recipes.</p>
                            <p class="below-title">Keep them all in one place</p>
                        </div>
                        <button class="register">Register</button>
                        <button class="add-recipe"><i class="fa fa-plus"></i></br>ADD NEW</button>
                    </div>
                    <div class="col-md-6 mobile-text">
                        <p class="below-title">Keep them all in one place</p>
                        <button class="register">Register</button>
                        <button class="add-recipe"><i class="fa fa-plus"></i></button>
                    </div>
                    <div class="col-md-6 mobile-illustration content-illustration">
                        <img src="../images/illustration.svg" class="illustration" />
                    </div>
                </div>
            </section>

            <section class="content-login">
                <div class="login-text">
                    <p>Already have an account?</p>
                    <a href="#" class="signIn">Sign in</a>
                </div>
            </section>

        </section>

        <div id="categories-title">
            <p class="categories-browse">Browse different categories</p>
        </div>

        <div id="browse">
            <div class="glider-contain multiple">
                <div class="glider"></div>
                <div id="dots" class="glider-dots"></div>
            </div>
        </div>

        <div id="meals">
            <div class="you-chose">You chose:</div>
            <div class="meals-title"></div>
            <div class="glider-contain multiple">
                <div class="glider"></div>
                <div id="dots" class="glider-dots"></div>
            </div>
        </div>

        <div id="recipe">
            <div class="meals-title"></div>

            <section class="divs">
                <div class="ingredients-title">Ingredients</div>
                <div class="ingredients"></div>
                <div class="meal-register">
                    <div class="meal-register-wrapper">
                        <button class="add-recipe-second"><i class="fa fa-plus"></i></button>
                        <button class="second-register">Register</button>
                        <div class="own-recipes">Start creating your own recipes!</div>
                    </div>
                </div>
            </section>

            <section class="divs-illustration">
                <div class="instructions-title">Instructions</div>
                <div class="instructions"></div>
                <div class="instructions-illustration">
                    <img src="../images/illustration-cook/cook.svg" class="illus" />
                </div>
            </section>
        </div>

        <?php

        $db = mysqli_connect('localhost', 'root', '', 'user_recipes', '3308');
        $query = "SELECT * FROM recipes WHERE user_id='{$_SESSION['id']}'";
        $results = mysqli_query($db, $query);
        if (mysqli_num_rows($results)) {
            while ($row = mysqli_fetch_array($results)) {
                $_SESSION['recipe_title'] = $row['recipe_name'];
                $_SESSION['recipe_ingredients'] = $row['recipe_ingredients'];
                $_SESSION['recipe_instructions'] = $row['recipe_instructions'];


                echo '<div id="db-recipes" class="db-recipes">';
                echo '<div class="recipe-title">' . $_SESSION['recipe_title'] . '<a href ="../php/delete.php?id=' . $row['recipe_id'] . '"class="delete-link"><i class="fa fa-trash delete"></i></a></div>';
                echo '<div class="row"><div class="col-md-6 ingredients-col">';

                echo '<div>' . $_SESSION["recipe_ingredients"] . '</div>';

                echo '</div><div class="col-md-6 instructions-col">';

                echo '<div>' . $_SESSION["recipe_instructions"] . '</div>';

                echo ' </div></div>';
                echo '</div>';
            }

            //header('Location: ../php/profile.php');
        } else echo '<div class="no-recipes"> <p>No personal recipes yet<p> </div> ';
        ?>




        <section class="footer">
            <div>Ana Čačija, 2020</div>
        </section>

    <?php
    } else {
    ?>
        <div id="text">
            <p><i class="fa fa-times-circle"></i> You need to <a href="../html/reg.html">log in</a> first.</p>
        </div>
    <?php
    }
    ?>

    <script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
    <script src="../js/profile.js"></script>
</body>

</html>