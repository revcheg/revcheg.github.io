<?php
    session_start();

    $_SESSION['second_step'] = $_POST;

	if (isset($_SESSION['token']) && isset($_GET['token'])) {
		if ($_SESSION['token'] == $_GET['token']) {
			header('Location: /client/real/step-3.php?token=' . $_GET['token']);
		}
	}
?>