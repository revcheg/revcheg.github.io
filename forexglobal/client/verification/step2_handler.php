<?php
    session_start();
    //if (isset($_SESSION['Leverage'])) {
    //	unset($_SESSION['Leverage']);
    //}
    $_SESSION['second_step'] = $_POST;
    //var_dump($_POST);
    //echo "-----------------------------------";
    $summ = $_POST['EXP'] + $_POST['CFDs'] + $_POST['INST'] + $_POST['HIGH'] + $_POST['STP'] + $_POST['RT'];
    if (intval($summ) <= 7) {
    	if (isset($_SESSION['token']) && isset($_GET['token'])) {
			if ($_SESSION['token'] == $_GET['token']) {
				header('Location: /global/client/real/step-3.php?token=' . $_GET['token']);
			}
		}
    }elseif (intval($summ) > 7 && intval($summ) < 15) {
    	//$_SESSION['Leverage'] = "Your leverage is only 1:50";
		//header('Location:' . $_SERVER['HTTP_REFERER']);
    }else{
    	$_SESSION['Leverage'] = "You are unable to open account.";
		header('Location:' . $_SERVER['HTTP_REFERER']);
    }
	
?>