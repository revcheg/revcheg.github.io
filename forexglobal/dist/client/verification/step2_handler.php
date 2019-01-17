<?php
   session_start();
    $_SESSION['second_step'] = $_POST;
    //var_dump($_POST);
    //echo "-----------------------------------";
    $summ = $_POST['experience'] + $_POST['attended_course_or_seminar_on_cfds_or_forex'] + $_POST['employed_as_a_professional_in_financial_institution'] + $_POST['trading_with_higher_leverage'] + $_POST['the_market_is_moving_against_your_position'] + $_POST['value_of_your_initial_position_in_a_cfd_contract'];
    if (intval($summ) < 15) {
    	if (isset($_SESSION['token']) && isset($_GET['token'])) {
			if ($_SESSION['token'] == $_GET['token']) {
			    $_SESSION['appropriatness_final_score'] = 'Passed';
				header('Location: /global/client/real/step-3.php?token=' . $_GET['token']);
			}
		}
    }else{
        $_SESSION['appropriatness_final_score'] = 'More than 15';
    	$_SESSION['Leverage'] = "You are unable to open account.";
		header('Location:' . $_SERVER['HTTP_REFERER']);
    }
	
?>