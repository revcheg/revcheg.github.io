<?php

include_once('includes/class.ga.parse.php');

if( isset($_GET['btag']) && !empty($_GET['btag']) ) {
	setcookie('btag', $_GET['btag'], time() + (86400 * 30), "/"); // 86400 = 1 day
}
?>
<!DOCTYPE html>
<html>
<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
	<link rel="shortcut icon" href="images/favicon.ico" />
	<title>LP</title>
	<!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
    <!-- Main CSS File -->
    <link href="css/invest-in-global-markets/main.css" rel="stylesheet">
    
    <!-- Fontawesome and Google Fonts -->
    <link href="css/invest-in-global-markets/font-awesome.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Archivo+Narrow:400,700' rel='stylesheet' type='text/css'>
	<link href="css/invest-in-global-markets/alertify.core.css" rel="stylesheet">
	<link href="css/invest-in-global-markets/alertify.default.css" rel="stylesheet">
	
	<!-- Selects -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/css/bootstrap-select.min.css">
	<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <script src="js/alertify.min.js"></script>

    <script type="text/javascript">
	$(document).ready(function(){

		$(".register-now").click(function(e) {

			var firstName = $('#firstname').val();
	        var lastName = $('#lastname').val();
	        var email = $('#email').val();
	        var telephone = $('#phone').val();
	        var country = $('#country').val();
	        var utm_source = $('#utm_source').val();
	        var utm_medium = $('#utm_medium').val();
	        var utm_campaign = $('#utm_campaign').val();
	        var utm_campaign_content = $('#utm_campaign_content').val();
	        var utm_campaign_term = $('#utm_campaign_term').val();
	        var btag = $('#btag').val();
	        var querystring = $("#querystring").val();
	        var terms_and_conditions = $('#terms-and-conditions').prop('checked');

	        if(firstName == '') {
	        	alertify.alert('Please enter your first name!');
	        	return false;
			}

	        if( !terms_and_conditions ) {
	        	$('#terms-and-conditions-link').css({'color' : '#b20000'});
	        	alertify.alert('You must accept the Terms and Conditions.');
	        	return false;
	        } else {
	        	$('#terms-and-conditions-link').css({'color' : '#fff'});
	        }

			var url = "ajax/lead.php";
		    var dataString = 'firstName=' + firstName + '&lastName=' + lastName + '&email=' + email + '&telephone=' + telephone + '&country=' + country + '&utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_campaign=' + utm_campaign + '&utm_campaign_content=' + utm_campaign_content + '&utm_campaign_term=' + utm_campaign_term + '&btag=' + btag + '&querystring=' + encodeURIComponent(querystring);

	    $.ajax({
	           type: "POST",
	           url: url,
			   dataType: 'json',
	           data: dataString,
	           success: function(data) {

        		   var dataArray = new Array();

            	  	if( data.Error ) {

						$.each(data.Response, function(key, value){
   	            			var cleanedArray = value.toString().split(',');
   	                    	$.each(cleanedArray, function(key, value){
   	                    		dataArray.push(value + '<br/>');

   	                 		});
                   		});

						alertify.alert(dataArray.join(""));

           			} else {


						if( data == 'email_exists' ) {
							alertify.alert(("Email already exists!"));
						} else if ( data == 'invalid_email') {
							alertify.alert(("Email is invalid. Please enter a valid email!"));
						} else if ( data == 'invalid_first_name') {
							alertify.alert(("Enter first name!"));
						} else if ( data == 'invalid_last_name') {
							alertify.alert(("Enter last name!"));
						} else if ( data == 'invalid_telephone') {
							alertify.alert(("Enter telephone!"));
						} else if ( data == 'invalid_country') {
							alertify.alert(("Select country!"));
						} else if( data == 'success' ) {
							alertify.alert(("Thank you for registering."));
	           				$('#register').each(function(){
		                        this.reset();
		                    });
						}

                   	}
	           }
	         });

			e.preventDefault();

		});
		
	});
	</script>
</head>

<body>
<?php include_once('includes/analyticstracking.php'); ?>