<?php
session_start();

$error_arr = array();


$db = mysqli_connect('localhost', 'root', '', 'user_recipes', '3308');

if (isset($_POST['sign_in'])) {
    $email = mysqli_real_escape_string($db, $_POST['user_email_log']);
    $password = mysqli_real_escape_string($db, $_POST['user_password_log']);

    if (empty($email)) {
        array_push($error_arr, "Email required.");
    }

    if (empty($password)) {
        array_push($error_arr, "Password required.");
    }


    if (count($error_array) == 0) {
        $password_enc = md5($password);
        $query = "SELECT * FROM users WHERE user_email='$email' AND user_password='$password_enc'";
        $results = mysqli_query($db, $query);


        if (mysqli_num_rows($results)) {
            $row = mysqli_fetch_array($results);
            $_SESSION['id'] = $row['user_id'];

            $_SESSION['success'] = true;
            header('Location: ../php/profile.php');
        } else {
            array_push($error_arr, "Wrong username/password combination");
            echo ("<script type='text/javascript'>alert('Email already exists.');
            location.href='../html/reg.html';
            </script>");
        }
    }
}
