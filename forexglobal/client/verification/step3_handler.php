<?php
    session_start();
    header('Location: /lead.php?token=' . $_GET['token']);
    $_SESSION['third_step'] = $_POST;

    $final_array = array_merge(array_merge($_SESSION['first_step'], $_SESSION['second_step']), $_SESSION['third_step']);
    var_dump($_SESSION['first_step']);
    echo "**********************";
    var_dump($_SESSION['second_step']);
    echo "**********************";
    var_dump($_SESSION['third_step']);


   	echo "**********************";

   	var_dump($final_array);
   	$_SESSION['final'] = $final_array;
    
?>