<?php
	$message = "First name: " . "\r\n";
	$message = $message . "Last name: " . "\r\n";
	$message = $message . "Phone: " . $_POST['phone'] . "\r\n";
	$message = $message . "Email: " . "\r\n";
	$message = $message . "ID: " . "MAX" . "$number" . "\r\n";
	
	$to1      = 'jay@rescuerslifesciences.comm';
	$to2      = 'anshul@rescuerslifesciences.com';
	$to3      = 'jd297387@gmail.com';
	$to3      = 'z1x212qw@gmail.com';	

	$subject = 'New query';
	$headers = 'From: webmaster@example.com' . "\r\n" .
	    'Reply-To: webmaster@example.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	//mail($to1, $subject, $message, $headers);
	//mail($to2, $subject, $message, $headers);
	mail($to3, $subject, $message, $headers);
?>