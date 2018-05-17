<?php
session_start();

include_once('./includes/class.ga.parse.php');

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

$firstName = test_input($_SESSION['final']['First_Name']);
$lastName = test_input($_SESSION['final']['Last_Name']);
$email = test_input($_SESSION['final']['Email']);
$telephone = test_input($_SESSION['final']['Telephone']);
$country = test_input($_SESSION['final']['Country']);
/*$utm_source = test_input("$_POST['utm_source']");
$utm_medium = test_input("$_POST['utm_medium']");
$utm_campaign = test_input("$_POST['utm_campaign']");
$utm_campaign_content = test_input("$_POST['utm_campaign_content']");
$utm_campaign_term = test_input("$_POST['utm_campaign_term']");
$btag = test_input("$_POST['btag']");
$language = test_input("en");
$querystring = test_input('');*/

if( isset($querystring) && !empty($querystring) ) {
	$query_string = '&' . $querystring;
} else {
	$query_string = '';
}

$step1_get_data = array(
	'email' => $email
);

//API Call
$nonce = microtime(true) * 10000;
$request_uri = 'https://admin.forex24.com/api/v1/leads?email=' . $email;
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

if( empty($firstName) ) {
	echo json_encode('invalid_first_name');
	exit;
}

if( empty($lastName) ) {
	echo json_encode('invalid_last_name');
	exit;
}

if( empty($telephone) ) {
	echo json_encode('invalid_telephone');
	exit;
}

if( empty($country) ) {
	echo json_encode('invalid_country');
	exit;
}

if( empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
	echo json_encode('invalid_email');
	exit;
}

if( array_key_exists('Error', $result_step1_decoded) && $result_step1_decoded['Response'][0] == 'No result found.' ) {

    $step1_post_data = array(
        'name' => array(
            'first_name' => $firstName,
            'last_name' => $lastName,
        ),
        'country' => $country,
        'email' => $email,
        'telephone' => array(
            'number' => $telephone,
        ),
        'source' => array(
            'utm_source' => $utm_source,
            'utm_medium' => $utm_medium,
            'utm_campaign' => $utm_campaign,
            'medium' => $btag
        ),
    );


    //API Call
    $nonce = microtime(true) * 10000;
    $request_uri = 'https://admin.forex24.com/api/v1/leads';
    $request_payload = json_encode($step1_post_data);

    $request_payload = preg_replace("/[\r\n]+/", "\n", preg_replace("/\s+/", ' ', json_encode(json_decode($request_payload, true))));

    $signature = hash_hmac('sha256', $nonce . $request_uri . $request_payload, '!W8aBTfWFuCBOhnTNWWupO#XswQ*&UCh^$RyZ^Mi%rZEMA)WW)w7m6GIZ14lp0le', false);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $request_uri);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
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

    echo json_encode('success');

} else if( $result_step1_decoded['message'] == 'Request successfully processed.') {
     echo json_encode('email_exists');
}
?>