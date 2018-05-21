<?php
    session_start();
    unset($_SESSION['Errors']);
    unset($_SESSION['Message']);
    require_once "recaptchalib.php";
// captcha
	$secret = "6LdyaVoUAAAAABzueuL2sivsAjPbZFFdQQ5Fa2Ne";
	$response = null;
	$reCaptcha = new ReCaptcha($secret);

	// if submitted check response
	if ($_POST["g-recaptcha-response"]) {
	$response = $reCaptcha->verifyResponse(
	        $_SERVER["REMOTE_ADDR"],
	        $_POST["g-recaptcha-response"]
	    );
	}

	if ($response != null && $response->success) {
		//check if email exists
		$step1_get_data = array(
				'email' => $_POST['Email']
		);

		$nonce = microtime(true) * 10000;
		$request_uri = 'https://admin.forex24.com/api/v1/leads?email=' . $_POST['Email'];
		$request_payload = json_encode($step1_get_data);
		
		$request_payload = preg_replace("/[\r\n]+/", "\n", preg_replace("/\s+/", ' ', json_encode(json_decode($request_payload, true))));
		
		$signature = hash_hmac('sha256', $nonce . $request_uri . $request_payload, '!W8aBTfWFuCBOhnTNWWupO#XswQ*&UCh^$RyZ^Mi%rZEMA)WW)w7m6GIZ14lp0le', false);
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $request_uri);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $request_payload);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
				'Content-Type: application/json',
				'Accept: application/json',
				'ACCESS_KEY: ' . 'qK(2h&qTzwbAEAEXV1sFUXHeoOb7wiY4',
				'ACCESS_SIGNATURE: ' . $signature,
				'ACCESS_NONCE: ' . $nonce
		)
				);
		//execute post
		$result_step1 = curl_exec($ch);
		
		$result_step1_decoded = json_decode($result_step1, true);
		if (isset($result_step1_decoded['Response'])&&$result_step1_decoded['Response'][0] == 'No result found.') {
			//cache data
			    $_SESSION['first_step'] = $_POST;
			    $_SESSION['token'] = generateCode();
			    //echo $_SESSION['token'];
			    //echo "Message sent";
			    //echo strval($_POST['Email']);
			//post mail
			    $message = "Hi, you applied for registration of a real ..... Please go to https://forex24.com/global/client/verification/?token=" . $_SESSION['token'] . " to proceed registration." . "\r\n";
				$to      = $_POST['Email'];
				$subject = 'New query';
				$headers = 'From: webmaster@example.com' . "\r\n" .
				    'Reply-To: webmaster@example.com' . "\r\n" .
				    'X-Mailer: PHP/' . phpversion();
				mail($to, $subject, $message, $headers);
				
			$_SESSION['Message'][0] = "Activation message is sent to your email address.";
			header('Location:' . $_SERVER['HTTP_REFERER']);
		}else{
			$_SESSION['Errors'][0] = "Email exists";
			header('Location:' . $_SERVER['HTTP_REFERER']);
			die();
		}

	//alreadyactivated error
		if ($_SESSION['activated'] == true) {
			$_SESSION['Errors'][1] = "Your account is already activated.";
			header('Location:' . $_SERVER['HTTP_REFERER']);
			die();
		}
	}else{
		$_SESSION['Errors'][2] = "You have not passed captcha.";
		header('Location:' . $_SERVER['HTTP_REFERER']);
		die();
	}

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