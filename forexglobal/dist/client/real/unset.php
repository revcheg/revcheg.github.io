<?php
	session_start();
	echo session_unset();
	var_dump($_SESSION);
?>