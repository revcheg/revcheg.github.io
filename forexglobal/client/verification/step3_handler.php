<?php
    session_start();
    $_SESSION['third_step'] = $_POST;
    header('Location: /global/lead.php?token=' . $_GET['token']);
?>