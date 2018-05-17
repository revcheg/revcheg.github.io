<?php
    session_start();

//cache data
    $_SESSION['first_step'] = $_POST;
    $_SESSION['token'] = generateCode();
    echo $_SESSION['token'];
    echo "Message sent";
    echo strval($_POST['Email']);
//post mail
    $message = "Hi, you applied for registration of a real ..... Please go to https://www.forex24.com/newforex/forex24/forex/register/real/step-2.php?token=" . $_SESSION['token'] . " to proceed registration." . "\r\n";
	$to      = $_POST['Email'];
	$subject = 'New query';
	$headers = 'From: webmaster@example.com' . "\r\n" .
	    'Reply-To: webmaster@example.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $message, $headers);

//random
	function generateCode($length = 8){
		$chars = 'abdefhiknrstyz1234567890';
		$numChars = strlen($chars);
		$string = '';
		for ($i = 0; $i < $length; $i++)
		{
		  $string .= substr($chars, rand(1, $numChars) - 1, 1);
		}
		return $string;
	}
?>