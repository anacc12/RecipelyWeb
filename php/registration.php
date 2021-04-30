<?php
session_start();

$error_array = array();


$db = mysqli_connect('localhost', 'root', '', 'user_recipes', '3308');

if (isset($_POST['sign_up'])) {
    $name = mysqli_real_escape_string($db, $_POST['user_name_reg']);
    $email = mysqli_real_escape_string($db, $_POST['user_email_reg']);
    $password = mysqli_real_escape_string($db, $_POST['user_password_reg']);

    if (empty($name)) {
        array_push($error_array, "Name required.");
    }

    if (empty($email)) {
        array_push($error_array, "Email required.");
    }

    if (empty($password)) {
        array_push($error_array, "Password required.");
    }

    $check_if_exists = "SELECT * FROM users WHERE user_email = '$email' LIMIT 1";

    $check_query = mysqli_query($db, $check_if_exists);
    $user = mysqli_fetch_assoc($check_query);

    if ($user) {
        if ($user['user_email'] == $email) {
            array_push($error_array, "Email already exists.");
            echo ("<script type='text/javascript'>alert('Email already exists.');
            location.href='../html/reg.html';
            </script>");
        }
    }

    if (count($error_array) == 0) {
        $password_enc = md5($password);
        $query = "INSERT INTO users (user_name, user_email, user_password) VALUES ('$name', '$email', '$password_enc')";
        mysqli_query($db, $query);
        $_SESSION['name'] = $name;
        $_SESSION['success'] = true;

        //header('Location: ../php/profile.php');
    }
    if (isset($_SESSION['success']) && $_SESSION['success'] == true) {
        $query = "SELECT * FROM users WHERE user_email='$email' AND user_password='$password_enc'";

        $results = mysqli_query($db, $query);
        if (mysqli_num_rows($results)) {
            $row = mysqli_fetch_array($results);
            $_SESSION['id'] = $row['user_id'];
            header('Location: ../php/profile.php');
        }
    }
}
