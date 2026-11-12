<?php
    session_start();
	if ($_SESSION['token'] == $_GET['token']) {
		$_SESSION['activated'] = true;
		header('Location: /global/client/real/step-2.php?token=' . $_GET['token']);
	}else{
		die("You don't have permissions index.");
	}
	
?>
