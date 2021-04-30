<?php
session_start();

$db = mysqli_connect('localhost', 'root', '', 'user_recipes', '3308');
$id = $_GET['id'];
$query = "DELETE FROM recipes WHERE recipe_id = '$id'";
mysqli_query($db, $query);
header('Location: ../php/profile.php');
