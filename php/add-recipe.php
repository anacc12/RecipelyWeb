<?php
session_start();

$error_array = array();


$db = mysqli_connect('localhost', 'root', '', 'user_recipes', '3308');

if (isset($_POST['save'])) {
    $title = mysqli_real_escape_string($db, $_POST['title']);
    $ingredients = mysqli_real_escape_string($db, $_POST['ingredients']);
    $instructions = mysqli_real_escape_string($db, $_POST['instructions']);
    debug_to_console($_SESSION['id']);

    if (empty($title)) {
        array_push($error_array, "Title required.");
    }

    if (empty($ingredients)) {
        array_push($error_array, "Ingredients required.");
    }

    if (empty($instructions)) {
        array_push($error_array, "Instructions required.");
    }

    if (count($error_array) == 0) {
        $password_enc = md5($password);
        $query = "INSERT INTO recipes (user_id, recipe_name, recipe_ingredients, recipe_instructions) 
        VALUES ('{$_SESSION['id']}','$title', '$ingredients', '$instructions')";

        mysqli_query($db, $query);
        $_SESSION['recipe'] = true;
        $_SESSION['success'] = true;

        header('Location: ../php/profile.php');
    } else header('Location: ../html/add-recipe.html');
}


function debug_to_console($data)
{
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log( $output);</script>";
}
