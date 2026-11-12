<?php
/**
 * The template for displaying Real Registration page.
 * Template Name: Real Registration Page
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Forex24
 */

//include_once('./includes/config/database.config.php');
//include_once('./includes/classes/database.class.php');

// Initialize the database class, and create an object
//$db = new database(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, 1);

include_once('./includes/class.ga.parse.php');

$language = ICL_LANGUAGE_CODE;

if( isset($_SERVER['QUERY_STRING']) && !empty($_SERVER['QUERY_STRING']) ) {
	$query_string = '&' . $_SERVER['QUERY_STRING'];
}

$cookie = new GA_Parse($_COOKIE);

$output_msg_array_step = array();

$appropriatness_score = 0;

$appropriatness_final_score = '';

if( isset($_GET['btag']) && !empty($_GET['btag']) ) {
	setcookie('btag', $_GET['btag'], time() + (86400 * 30), "/"); // 86400 = 1 day
}/* else  {
	unset($_COOKIE['btag']);
	setcookie('btag', null, -1, '/');
}*/


$firstName = mysql_real_escape_string($_POST['firstName']);
$lastName = mysql_real_escape_string($_POST['lastName']);
$countryOfResidence = $_POST['countryOfResidence'];
$email = mysql_real_escape_string($_POST['email']);
$telephoneCountryCode = mysql_real_escape_string($_POST['countryTelephoneCode']);
$telephone = mysql_real_escape_string($_POST['telephone']);


$dob_dd = $_POST['dob_dd'];
$dob_mm = $_POST['dob_mm'];
$dob_yy = $_POST['dob_yy'];
$address1 = mysql_real_escape_string($_POST['address1']);
$address2 = mysql_real_escape_string($_POST['address2']);
$city = mysql_real_escape_string($_POST['city']);
$post_code = mysql_real_escape_string($_POST['postCode']);
$us_taxpayer = $_POST['us_taxpayer'];
$tin = mysql_real_escape_string($_POST['tin']);
$pep = $_POST['pep'];
$education = $_POST['education'];
$employment = $_POST['employment'];
$annual_income = $_POST['annualincome'];
$source_of_income = $_POST['sourceofincome'];
$source_of_income_other = mysql_real_escape_string($_POST['sourceofincomeother']);
$estimated_net_worth = $_POST['estimatenetworth'];
$purpose_of_opening_trading_account = $_POST['purposeofopeningtradingaccount'];
$anticipated_amount_to_spend_with_us_for_the_next_twelve_months = $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'];
$experience = $_POST['experience'];
//$experiencespecify = mysql_real_escape_string($_POST['experiencespecify']);
$traded_cfds = $_POST['traded_cfds'];
$traded_cfds_frequency = $_POST['traded_cfds_frequency'];
$traded_cfds_volume = $_POST['traded_cfds_volume'];
$traded_other_derivatives = $_POST['traded_other_derivatives'];
$traded_other_derivatives_frequency = $_POST['traded_other_derivatives_frequency'];
$traded_other_derivatives_volume = $_POST['traded_other_derivatives_volume'];
$shares_bonds = $_POST['shares_bonds'];
$shares_bond_frequency = $_POST['shares_bonds_frequency'];
$shares_bond_volume = $_POST['shares_bonds_volume'];
$attended_course_or_seminar_on_cfds_or_forex = $_POST['attended_course_or_seminar_on_cfds_or_forex'];
$employed_as_a_professional_in_financial_institution = $_POST['employed_as_a_professional_in_financial_institution'];
$trading_with_higher_leverage = $_POST['trading_with_higher_leverage'];
$the_market_is_moving_against_your_position = $_POST['the_market_is_moving_against_your_position'];
$value_of_your_initial_position_in_a_cfd_contract = $_POST['value_of_your_initial_position_in_a_cfd_contract'];
$accounttype = $_POST['accounttype'];
$tradingplatform = $_POST['tradingplatform'];
$lod_terms = $_POST['lod_terms_btn'];
$currency = $_POST['currency'];
$leverage = (int)$_POST['leverage'];
$password = mysql_real_escape_string($_POST['password']);
$confirmPassword = mysql_real_escape_string($_POST['confirmPassword']);

$current_date = date('d-m-Y');
$dob = $dob_dd . '-' . $dob_mm . '-' . $dob_yy;

$appropriateness_risk_warning = $_POST['appropriateness_risk_warning_btn'];
$communication_i_wish_to_receive_newsletters = $_POST['communication_i_wish_to_receive_newsletters'];
$terms = $_POST['terms'];

if( $_POST['utm_source'] == '' ) {
	
	
	if( $_POST['utm_source'] == 'zulutrade' || $_POST['utm_source'] == 'WL_Signup' || $_POST['utm_source'] == 'lp' ) {
		
		$groups = array(
				/*"silver" => array (
					"USD" => "ZULSILUSD",
						"EUR" => "ZULSILEUR",
						"GBP" => "ZULSILGBP"
				),
		"gold" => array (
				"USD" => "ZULGOLUSD",
				"EUR" => "ZULGOLEUR",
				"GBP" => "ZULGOLGBP"
		)*/
				"zulutrade" => array (
						"USD" => "ZULSILUSD",
						"EUR" => "ZULSILEUR",
						"GBP" => "ZULSILGBP"
				)
		);
		
	} else {
		
		$groups = array(
				"bronze" => array (
						"USD" => "SPSBROUSD",
						"EUR" => "SPSBROEUR",
						"GBP" => "SPSBROGBP"
				),
				"silver" => array (
						"USD" => "SPSSILUSD",
						"EUR" => "SPSSILEUR",
						"GBP" => "SPSSILGBP"
				),
				"gold" => array (
						"USD" => "SPSGOLUSD",
						"EUR" => "SPSGOLEUR",
						"GBP" => "SPSGOLGBP"
				),
				"swap free" => array (
						"EUR" => "SPSSFAEUR"
				),
				"zulutrade" => array (
						"USD" => "ZULSILUSD",
						"EUR" => "ZULSILEUR",
						"GBP" => "ZULSILGBP"
				)
		);
	}
	

} else {

	if( $_POST['utm_source'] == 'zulutrade' || $_POST['utm_source'] == 'WL_Signup' || $_POST['utm_source'] == 'lp' ) {
		
		$groups = array(
				/*"silver" => array (
					"USD" => "ZULSILUSD",
						"EUR" => "ZULSILEUR",
						"GBP" => "ZULSILGBP"
				),
		"gold" => array (
				"USD" => "ZULGOLUSD",
				"EUR" => "ZULGOLEUR",
				"GBP" => "ZULGOLGBP"
		)*/
				"zulutrade" => array (
						"USD" => "ZULSILUSD",
						"EUR" => "ZULSILEUR",
						"GBP" => "ZULSILGBP"
				)
		);
		
	} else {
		
		$groups = array(
				"bronze" => array (
						"USD" => "SPSBROUSD",
						"EUR" => "SPSBROEUR",
						"GBP" => "SPSBROGBP"
				),
				"silver" => array (
						"USD" => "SPSSILUSD",
						"EUR" => "SPSSILEUR",
						"GBP" => "SPSSILGBP"
				),
				"gold" => array (
						"USD" => "SPSGOLUSD",
						"EUR" => "SPSGOLEUR",
						"GBP" => "SPSGOLGBP"
				),
				"swap free" => array (
						"EUR" => "SPSSFAEUR"
				)
		);
	}
}

//years to days
$eighteen_years = 6575;

//Calculate the difference.
$difference = strtotime($current_date) - strtotime($dob);

$dob_in_days = $difference / ( 24 * 60 * 60 ); //convert to days

if(isset($_POST['liveRegistrationBtn'])) {

    if( empty($firstName) ) {
        $output_msg_array_step[1]['item']['message'] = __('Please enter your first name!', 'wpml_theme');
        $output_msg_array_step[1]['item']['status'] = 'error';
        $output_msg_array_step[1]['item']['element'] = 'firstName';
    }

    if( empty($lastName) ) {
        $output_msg_array_step[2]['item']['message'] = __('Please enter your last name!', 'wpml_theme');
        $output_msg_array_step[2]['item']['status'] = 'error';
        $output_msg_array_step[2]['item']['element'] = 'lastName';
    }

    if( empty($countryOfResidence) ) {
        $output_msg_array_step[3]['item']['message'] = __('Please select your country!', 'wpml_theme');
        $output_msg_array_step[3]['item']['status'] = 'error';
        $output_msg_array_step[3]['item']['element'] = 'countryOfResidence';
    }

    if( empty($telephone) ) {
        $output_msg_array_step[4]['item']['message'] = __('Please enter your telephone!', 'wpml_theme');
        $output_msg_array_step[4]['item']['status'] = 'error';
        $output_msg_array_step[4]['item']['element'] = 'telephone';
    }

    if( empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false ) {
        $output_msg_array_step[5]['item']['message'] = __('Please enter a valid email address!', 'wpml_theme');
        $output_msg_array_step[5]['item']['status'] = 'error';
        $output_msg_array_step[5]['item']['element'] = 'email';
    }
	
	if( empty($dob_dd) ) {
		$output_msg_array_step[9]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[9]['item']['status'] = 'error';
		$output_msg_array_step[9]['item']['element'] = 'dob_dd';
	}
	
	if( empty($dob_mm) ) {
		$output_msg_array_step[10]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[10]['item']['status'] = 'error';
		$output_msg_array_step[10]['item']['element'] = 'dob_mm';
	}
	
	if( empty($dob_yy) ) {
		$output_msg_array_step[11]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[11]['item']['status'] = 'error';
		$output_msg_array_step[11]['item']['element'] = 'dob_yy';
	}
	
	if( $dob_in_days < $eighteen_years ) {
		$output_msg_array_step[12]['item']['message'] = __('You must be at least 18 years old', 'wpml_theme');
		$output_msg_array_step[12]['item']['status'] = 'error';
		$output_msg_array_step[12]['item']['element'] = 'dob';
	}
	
	if( empty($address1) ) {
		$output_msg_array_step[13]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[13]['item']['status'] = 'error';
		$output_msg_array_step[13]['item']['element'] = 'address1';
	}
	
	if( empty($city) ) {
		$output_msg_array_step[14]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[14]['item']['status'] = 'error';
		$output_msg_array_step[14]['item']['element'] = 'city';
	}
	
	if( empty($post_code) ) {
		$output_msg_array_step[15]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[15]['item']['status'] = 'error';
		$output_msg_array_step[15]['item']['element'] = 'postCode';
	}
	
	if( $us_taxpayer == '' ) {
		$output_msg_array_step[16]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[16]['item']['status'] = 'error';
		$output_msg_array_step[16]['item']['element'] = 'us_taxpayer';
	} else {
		if( $us_taxpayer == '1' && empty($tin) ) {
			$output_msg_array_step[17]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[17]['item']['status'] = 'error';
			$output_msg_array_step[17]['item']['element'] = 'tin';
		}
	}
	
	if( $pep == '' ) {
		$output_msg_array_step[18]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[18]['item']['status'] = 'error';
		$output_msg_array_step[18]['item']['element'] = 'pep';
	}
	
	if( empty($education) ) {
		$output_msg_array_step[19]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[19]['item']['status'] = 'error';
		$output_msg_array_step[19]['item']['element'] = 'education';
	}
	
	if( empty($employment) ) {
		$output_msg_array_step[20]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[20]['item']['status'] = 'error';
		$output_msg_array_step[20]['item']['element'] = 'employment';
	}
	
	if( empty($annual_income) ) {
		$output_msg_array_step[21]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[21]['item']['status'] = 'error';
		$output_msg_array_step[21]['item']['element'] = 'annualincome';
	}
	
	if( empty($source_of_income) ) {
		$output_msg_array_step[22]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[22]['item']['status'] = 'error';
		$output_msg_array_step[22]['item']['element'] = 'sourceofincome';
	} else {
		if( $source_of_income == 'other' && empty($source_of_income_other) ) {
			$output_msg_array_step[23]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[23]['item']['status'] = 'error';
			$output_msg_array_step[23]['item']['element'] = 'sourceofincomeother';
		}
	}
	
	if( empty($estimated_net_worth) ) {
		$output_msg_array_step[24]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[24]['item']['status'] = 'error';
		$output_msg_array_step[24]['item']['element'] = 'estimatenetworth';
	}
	
	if( empty($purpose_of_opening_trading_account) ) {
		$output_msg_array_step[25]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[25]['item']['status'] = 'error';
		$output_msg_array_step[25]['item']['element'] = 'purposeofopeningtradingaccount';
	}
	
	if( empty($anticipated_amount_to_spend_with_us_for_the_next_twelve_months) ) {
		$output_msg_array_step[26]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[26]['item']['status'] = 'error';
		$output_msg_array_step[26]['item']['element'] = 'anticipatedamounttospendwithusforthenexttwelvemonths';
	}
	
	if( $experience == '' ) {
		$output_msg_array_step[27]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[27]['item']['status'] = 'error';
		$output_msg_array_step[27]['item']['element'] = 'experience';
	} else {
		
		//appropriatness rule
		if( $experience == 0 ) {
			$appropriatness_score+=5;
		}
	}
	
	if( $traded_cfds != '' ) {
		
		if( empty($traded_cfds_frequency) ) {
			$output_msg_array_step[28]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[28]['item']['status'] = 'error';
			$output_msg_array_step[28]['item']['element'] = 'traded_cfds_frequency';
		}
		
		if( empty($traded_cfds_volume) ) {
			$output_msg_array_step[29]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[29]['item']['status'] = 'error';
			$output_msg_array_step[29]['item']['element'] = 'traded_cfds_volume';
		}
	} else {
		//appropriatness rule
		if( $traded_cfds == 0 ) {
			$appropriatness_score+=3;
		}
	}
	
	if( $traded_other_derivatives != '' ) {
		
		if( empty($traded_other_derivatives_frequency) ) {
			$output_msg_array_step[30]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[30]['item']['status'] = 'error';
			$output_msg_array_step[30]['item']['element'] = 'traded_other_derivatives_frequency';
		}
		
		if( empty($traded_other_derivatives_volume) ) {
			$output_msg_array_step[31]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[31]['item']['status'] = 'error';
			$output_msg_array_step[31]['item']['element'] = 'traded_other_derivatives_volume';
		}
		
	} else {
		//appropriatness rule
		if( $traded_other_derivatives == 0 ) {
			$appropriatness_score+=2;
		}
	}
	
	if( $shares_bonds != '' ) {
		
		if( empty($shares_bond_frequency) ) {
			$output_msg_array_step[32]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[32]['item']['status'] = 'error';
			$output_msg_array_step[32]['item']['element'] = 'shares_bonds_frequency';
		}
		
		if( empty($shares_bond_volume) ) {
			$output_msg_array_step[33]['item']['message'] = __('This field is required', 'wpml_theme');
			$output_msg_array_step[33]['item']['status'] = 'error';
			$output_msg_array_step[33]['item']['element'] = 'shares_bonds_volume';
		}
		
	} else {
		//appropriatness rule
		if( $shares_bonds == 0 ) {
			$appropriatness_score+=1;
		}
	}
	
	if( $attended_course_or_seminar_on_cfds_or_forex == '' ) {
		$output_msg_array_step[34]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[34]['item']['status'] = 'error';
		$output_msg_array_step[34]['item']['element'] = 'attended_course_or_seminar_on_cfds_or_forex';
		
	} else {
		//appropriatness rule
		if( $attended_course_or_seminar_on_cfds_or_forex == 0 ) {
			$appropriatness_score+=3;
		}
	}
	
	if( $employed_as_a_professional_in_financial_institution == '' ) {
		$output_msg_array_step[35]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[35]['item']['status'] = 'error';
		$output_msg_array_step[35]['item']['element'] = 'employed_as_a_professional_in_financial_institution';
		
	} else {
		//appropriatness rule
		if( $employed_as_a_professional_in_financial_institution == 0 ) {
			$appropriatness_score += 1;
		}
	}
	
	if( $trading_with_higher_leverage == '' ) {
		$output_msg_array_step[36]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[36]['item']['status'] = 'error';
		$output_msg_array_step[36]['item']['element'] = 'trading_with_higher_leverage';
	} else {
		//appropriatness rule
		if( $trading_with_higher_leverage == 0 ) {
			$appropriatness_score+=2;
		}
	}
	
	if( $the_market_is_moving_against_your_position == '' ) {
		$output_msg_array_step[37]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[37]['item']['status'] = 'error';
		$output_msg_array_step[37]['item']['element'] = 'the_market_is_moving_against_your_position';
	} else {
		//appropriatness rule
		if( $the_market_is_moving_against_your_position == 0 ) {
			$appropriatness_score+=2;
		}
	}
	
	if( $value_of_your_initial_position_in_a_cfd_contract == '' ) {
		$output_msg_array_step[38]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[38]['item']['status'] = 'error';
		$output_msg_array_step[38]['item']['element'] = 'value_of_your_initial_position_in_a_cfd_contract';
	} else {
		//appropriatness rule
		if( $value_of_your_initial_position_in_a_cfd_contract == 1 ) {
			$appropriatness_score+=2;
		}
	}
	
	if( $accounttype == '' ) {
		$output_msg_array_step[39]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[39]['item']['status'] = 'error';
		$output_msg_array_step[39]['item']['element'] = 'accounttype';
	}
	
	if( $tradingplatform == '' ) {
		$output_msg_array_step[40]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[40]['item']['status'] = 'error';
		$output_msg_array_step[40]['item']['element'] = 'tradingplatform';
	}
	
	if( $tradingplatform !='' && $tradingplatform == 'zulutrade' && $lod_terms == '' ) {
		$output_msg_array_step[41]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[41]['item']['status'] = 'error';
		$output_msg_array_step[41]['item']['element'] = 'lod_terms_btn';
	}
	
	if( $currency == '' ) {
		$output_msg_array_step[42]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[42]['item']['status'] = 'error';
		$output_msg_array_step[42]['item']['element'] = 'currency';
	}
	
	if( $leverage == '' ) {
		$output_msg_array_step[43]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[43]['item']['status'] = 'error';
		$output_msg_array_step[43]['item']['element'] = 'leverage';
	}
	
	if( empty($password) ) {
		$output_msg_array_step[44]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[44]['item']['status'] = 'error';
		$output_msg_array_step[44]['item']['element'] = 'password';
	}
	
	if( !empty($password) && strlen($password) < 8 ) {
		$output_msg_array_step[45]['item']['message'] = __('The password length should be at least 8 characters', 'wpml_theme');
		$output_msg_array_step[45]['item']['status'] = 'error';
		$output_msg_array_step[45]['item']['element'] = 'password';
	}
	
	if( empty($confirmPassword) ) {
		$output_msg_array_step[46]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[46]['item']['status'] = 'error';
		$output_msg_array_step[46]['item']['element'] = 'confirmPassword';
	}
	
	if( !empty($confirmPassword) && strlen($confirmPassword) < 8 ) {
		$output_msg_array_step[47]['item']['message'] = __('The confirm password length should be at least 8 characters', 'wpml_theme');
		$output_msg_array_step[47]['item']['status'] = 'error';
		$output_msg_array_step[47]['item']['element'] = 'confirmPassword';
	}
	
	if( (strlen($password) >= 8 && strlen($confirmPassword) >= 8) && $password != $confirmPassword ) {
		$output_msg_array_step[48]['item']['message'] = __('The password and confirm password fields do not match', 'wpml_theme');
		$output_msg_array_step[48]['item']['status'] = 'error';
		$output_msg_array_step[48]['item']['element'] = 'confirmPassword';
	}
	
	if( $appropriatness_score <= 7 ) {
		$appropriatness_final_score = 'pass';
	} else if( $appropriatness_score >=8 && $appropriatness_score <=14 ) {
		$appropriatness_final_score = 'restricted_leverage'; // show only 1:50 leverage
	} else if( $appropriatness_score >=15 ) {
		$appropriatness_final_score = 'cannot_open_account'; // failed appropriatness test
	}
	
	if( !isset($appropriateness_risk_warning) ) {
		$output_msg_array_step[49]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[49]['item']['status'] = 'error';
		$output_msg_array_step[49]['item']['element'] = 'appropriateness_risk_warning_btn';
	}
	
	if( $communication_i_wish_to_receive_newsletters == '' ) {
		$output_msg_array_step[50]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[50]['item']['status'] = 'error';
		$output_msg_array_step[50]['item']['element'] = 'communication_i_wish_to_receive_newsletters';
	}
	
	if( $terms == '' ) {
		$output_msg_array_step[51]['item']['message'] = __('This field is required', 'wpml_theme');
		$output_msg_array_step[51]['item']['status'] = 'error';
		$output_msg_array_step[51]['item']['element'] = 'terms';
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
	
	if( empty($output_msg_array_step) && $result_step1_decoded['Response'][0] == 'No result found.' ) {
	
	
		if( isset($_GET['btag']) && !empty($_GET['btag']) ) {
			$medium = $_GET['btag'];
		}
	
		$utm_source = $_POST['utm_source'];
		$utm_medium = $_POST['utm_medium'];
		$utm_campaign = $_POST['utm_campaign'];
		$utm_content = $_POST['utm_campaign_content'];
		$utm_term = $_POST['utm_campaign_term'];
		 
		$db->query("INSERT INTO registration (registration_email, registration_hash_code, registration_first_name, registration_last_name, registration_country, registration_telephone_code, registration_telephone, registration_utm_source, registration_utm_medium, registration_utm_campaign, registration_medium, registration_utm_term, registration_utm_content) VALUES ('$email', '$hash', '$firstName', '$lastName', '$countryOfResidence', '$telephoneCountryCode', '$telephone', '$utm_source', '$utm_medium', '$utm_campaign', '$medium', '$utm_term', '$utm_content')", ASSOC);
		
		$step_post_data = array(
			'name' => array(
					'first_name' => $firstName,
					'last_name' => $lastName,
			),
			'country' => $countryOfResidence,
			'email' => $email,
			'telephone' => array(
					'country_code' => $telephoneCountryCode,
					'number' => $telephone,
			),
			'source' => array(
					'utm_source' => $utm_source,
					'utm_medium' => $utm_medium,
					'utm_campaign' => $utm_campaign,
					'medium' => $medium
			),
			'language' => $language,
			'dob' => strtotime($dob_yy . '-' . $dob_mm . '-' . $dob_dd),
			'address' => $address1 . ' ' . $address2,
			'city' => $city,
			'zip' => $post_code,
			'is_us_tax_payer' => $us_taxpayer,
			'us_tax_id' => $tin,
			'is_pep' => $pep,
			'education' => $education,
			'employment' => $employment,
			'annual_income' => $annual_income,
			'source_of_income' => $source_of_income . ' ' . $source_of_income_other,
			'estimated_net_worth' => $estimated_net_worth,
			'purpose_of_account' => $purpose_of_opening_trading_account,
			'initial_deposit_12m' => $anticipated_amount_to_spend_with_us_for_the_next_twelve_months,
			//'past_experience' => $experience . ' ' . $experiencespecify,
			'past_experience' => $experience,
			'has_past_trade_cfds' => $traded_cfds,
			'past_trade_cfds_frequency' => $traded_cfds_frequency,
			'past_trade_cfds_volume' => $traded_cfds_volume,
			'has_past_trade_derivatives' => $traded_other_derivatives,
			'past_trade_derivatives_frequency' => $traded_other_derivatives_frequency,
			'past_trade_derivatives_volume' => $traded_other_derivatives_volume,
			'has_past_trade_bonds' => $shares_bonds,
			'past_trade_bonds_frequency' => $shares_bond_frequency,
			'past_trade_bonds_volume' => $shares_bond_volume,
			'has_education_courses' => $attended_course_or_seminar_on_cfds_or_forex,
			'has_employment_as_pro' => $employed_as_a_professional_in_financial_institution,
			'quiz_high_leverage' => $trading_with_higher_leverage,
			'quiz_stop_out' => $the_market_is_moving_against_your_position,
			'quiz_margin_call' => $value_of_your_initial_position_in_a_cfd_contract,
			'account.group' => $groups[$accounttype][$currency],
			'account.currency' => $currency,
			'account.leverage' => $leverage,
			'password' => $confirmPassword,
			'quiz_final_score' => $appropriatness_final_score,
			'zulutrade_lod' => $lod_terms,
			'appropriateness_risk_warning' => $appropriateness_risk_warning,
			'agree_newsletter' => $communication_i_wish_to_receive_newsletters,
			'agree_terms' => $terms
		);
			
		//API Call
		$nonce = microtime(true) * 10000;
		$request_uri = 'https://admin.forex24.com/api/v1/leads';
		$request_payload = json_encode($step_post_data);
	
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
			
		if( array_key_exists('Error', $result_step1_decoded) ) {
			$output_msg_array[0]['item']['message'] = $result_step1_decoded['Response'][0];
			$output_msg_array[0]['item']['status'] = 'error';
		} else {
			foreach($result_step1_decoded['response'] as $key => $value) {
				$step1_lead_id = $value['id'];
			}
		}
	
		//POST to Accounts endpoint
		$step2_post_account_data = array(
				'lead' => $step1_lead_id,
				'group' => $groups[$accounttype][$currency],
				'leverage' => $leverage,
				'password' => $confirmPassword,
				'base_currency' => $currency,
				'read_only' => 1,
				'send_reports' => 1,
				'change_password' => 1
		);
	
		//API Call
		$nonce = microtime(true) * 10000;
		$request_uri = 'https://admin.forex24.com/api/v1/accounts/';
		$request_payload = json_encode($step2_post_account_data);
	
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
		$result_step2 = curl_exec($ch);
	
		//close connection
		curl_close($ch);
	
		if( empty($output_msg_array_step) ) {
				
			$output_msg_array_step[52]['item']['message'] = __('Thank you for registering!', 'wpml_theme');
			$output_msg_array_step[52]['item']['status'] = 'success';
			
			echo '<form action="https://client.forex24.com/' . $language . '/members/login" method="POST" id="form" style="display:none;">';
			echo '<input type="hidden" name="act" value="login" />';
			echo '<input type="hidden" name="user" value="' . $email . '"/>';
			echo '<input type="hidden" name="password" value="' . $confirmPassword . '"/>';
			echo '<input type="hidden" name="redirect" value="/members/documents" />';
			echo '<input type="submit" name="btnSubmit" value="Sign in" />';
			echo '</form>';
			echo '<script>setTimeout(function(){document.getElementById("form").submit();}, 3000);</script>';
			$_POST = array();
		}
		
		 
	} else if( !empty($result_step1_decoded['response']) ) {
		$output_msg_array_step[53]['item']['message'] = __('Email already exists!', 'wpml_theme');
		$output_msg_array_step[53]['item']['status'] = 'error';
	}
	
}
get_header('real-account-registration-header'); ?>

<main id="registerPage" class="innerPage">

    <article>
        <div class="container">
            <h1><?php the_title(); ?></h1>
            
            <?php 

                foreach( $output_msg_array_step as $key => $value ) {
                    if( $value['item']['status'] == 'error' && $value['item']['message'] != 'This field is required' ) {
            ?> 
                        <div class="row">
                            <div class="col-md-12">
                                <div class="alert alert-danger alert-dismissible fade in" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <strong><?php _e('Error', 'wpml_theme');?>: </strong> <?php echo $value['item']['message']; ?>
                                </div>
                            </div>
                        </div>
            <?php 
                    } elseif ( $value['item']['status'] == 'success' ) { ?>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="alert alert-success alert-dismissible fade in" role="alert">
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <strong><?php _e('Success', 'wpml_theme');?>: </strong> <?php echo $value['item']['message']; ?>
                                </div>
                            </div>
                        </div>

            <?php   }
                }
            ?>
                
                <form id="liveRegistrationForm" method="post" action="">
                    
                        
                        <div class="row">
                        
                            <div class="col-md-8 col-md-offset-2">
                            	<legend><?php _e('Pre-Registration', 'wpml_theme');?></legend>
                                <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'firstName' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                    <label for="firstName" class="control-label"><?php _e('First Name', 'wpml_theme');?></label>
                                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="<?php _e('First Name', 'wpml_theme');?>" value="<?php if( $_POST['firstName']) { echo $firstName; } ?>">
                                    <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'firstName' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                </div>

                                <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'lastName' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                    <label for="lastName" class="control-label"><?php _e('Last Name', 'wpml_theme');?></label>
                                    <input type="text" class="form-control" id="lastName" name="lastName" placeholder="<?php _e('Last Name', 'wpml_theme');?>" value="<?php if( $_POST['lastName']) { echo $lastName; } ?>">
                                    <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'lastName' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'countryOfResidence' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                    <label for="countryOfResidence" class="control-label"><?php _e('Country of Residence', 'wpml_theme');?></label>
                                    <select class="form-control" id="countryOfResidence" name="countryOfResidence">
                                        <option value="">-<?php _e('Select Country', 'wpml_theme');?>-</option>
                                        <option value="AT" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'AT' ) { echo ' selected'; } ?>>Austria</option>
                                        <option value="BG" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'BG' ) { echo ' selected'; } ?>>Bulgaria</option>
                                        <option value="HR" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'HR' ) { echo ' selected'; } ?>>Croatia</option>
                                        <option value="CY" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'CY' ) { echo ' selected'; } ?>>Cyprus</option>
                                        <option value="CZ" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'CZ' ) { echo ' selected'; } ?>>Czech Republic</option>
                                        <option value="DK" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'DK' ) { echo ' selected'; } ?>>Denmark</option>
                                        <option value="EE" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'EE' ) { echo ' selected'; } ?>>Estonia</option>    
                                        <option value="FI" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'FI' ) { echo ' selected'; } ?>>Finland</option>
                                        <option value="FR" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'FR' ) { echo ' selected'; } ?>>France</option>      
                                        <option value="DE" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'DE' ) { echo ' selected'; } ?>>Germany</option>
                                        <option value="GR" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'GR' ) { echo ' selected'; } ?>>Greece</option>              
                                        <option value="HU" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'HU' ) { echo ' selected'; } ?>>Hungary</option>
                                        <option value="IS" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'IS' ) { echo ' selected'; } ?>>Iceland</option>
                                        <option value="IE" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'IE' ) { echo ' selected'; } ?>>Ireland</option>
                                        <option value="IT" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'IT' ) { echo ' selected'; } ?>>Italy</option>          
                                        <option value="LV" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'LV' ) { echo ' selected'; } ?>>Latvia</option>
                                        <option value="LI" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'LI' ) { echo ' selected'; } ?>>Liechtenstein</option>
                                        <option value="LT" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'LT' ) { echo ' selected'; } ?>>Lithuania</option>
                                        <option value="LU" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'LU' ) { echo ' selected'; } ?>>Luxembourg</option>
                                        <option value="MT" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'MT' ) { echo ' selected'; } ?>>Malta</option>
                                        <option value="NL" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'NL' ) { echo ' selected'; } ?>>Netherlands</option>
                                        <option value="NO" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'NO' ) { echo ' selected'; } ?>>Norway</option>
                                        <option value="PL" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'PL' ) { echo ' selected'; } ?>>Poland</option>
                                        <option value="PT" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'PT' ) { echo ' selected'; } ?>>Portugal</option>
                                        <option value="RO" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'RO' ) { echo ' selected'; } ?>>Romania</option>
                                        <option value="SK" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'SK' ) { echo ' selected'; } ?>>Slovakia</option>
                                        <option value="SI" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'SI' ) { echo ' selected'; } ?>>Slovenia</option>
                                        <option value="ES" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'ES' ) { echo ' selected'; } ?>>Spain</option>
                                        <option value="SE" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'SE' ) { echo ' selected'; } ?>>Sweden</option>
                                        <option value="GB" <?php if( $_POST['countryOfResidence'] && $_POST['countryOfResidence'] == 'GB' ) { echo ' selected'; } ?>>United Kingdom</option>
                                    </select>
                                    <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'countryOfResidence' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                    <div id="us-clients-msg" class="clients-msg">
                                        <span><?php _e('Forex24 does not provide services to residents of the United States of America.', 'wpml_theme');?></span>
                                    </div>
                                    <div id="ca-clients-msg" class="clients-msg">
                                        <span><?php _e('Forex24 does not provide services to residents of Canada.', 'wpml_theme');?></span>
                                    </div>
                                    <div id="jp-clients-msg" class="clients-msg">
                                        <span><?php _e('Forex24 does not provide services to residents of Japan.', 'wpml_theme');?></span>
                                    </div>
                                    <div id="kp-clients-msg" class="clients-msg">
                                        <span><?php _e('Forex24 does not provide services to residents of North Korean.', 'wpml_theme');?></span>
                                    </div>
                                    <div id="ir-clients-msg" class="clients-msg">
                                        <span><?php _e('Forex24 does not provide services to residents of Iranian.', 'wpml_theme');?></span>
                                    </div>
                                    <div id="be-clients-msg" class="clients-msg">
                                        <span><?php _e('Forex24 does not provide services to residents of Belgium.', 'wpml_theme');?></span>
                                    </div>
                                </div>
                            

                            

                                <div class="col-md-6 col-xs-3 pull-left no-left-padding">

                                    <div class="form-group">
                                        <label for="Telephone" class="control-label"><?php _e('Telephone', 'wpml_theme');?></label>
                                        <input name="countryTelephoneCode" type="text" id="countryTelephoneCode" class="form-control" placeholder="<?php _e('Country Code', 'wpml_theme');?>" readonly>
                                    </div>
                                </div>

                                <div class="col-md-6 col-xs-9 pull-right no-right-padding">
                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'telephone' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label for="" class="control-label">&nbsp;</label>
                                        <input name="telephone" type="text" id="telephone" class="form-control" placeholder="<?php _e('Telephone', 'wpml_theme');?>" value="<?php if( $_POST['telephone']) { echo $telephone; } ?>">
                                        <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'telephone' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                    </div>
                                </div>
                            </div>  

                        </div>
                        
                        <div class="row">

                            <div class="col-md-8 col-md-offset-2">
	                                <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'email' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
	                                    <label for="Email" class="control-label"><?php _e('Email', 'wpml_theme');?></label>
	                                    <input name="email" type="email" id="email" class="form-control" placeholder="Email" value="<?php if( $_POST['email']) { echo $email; } ?>">
	                                    <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'email' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
	                                </div>
	                                <p class="help-block">
	                                    <small><i class="fa fa-lock pull-left"></i><?php _e('Your email will be used only for the purpose of opening your trading account and will not be shared with third parties.', 'wpml_theme');?></small>
	                                </p>

                            </div>

                        </div>





                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">

                                <legend><?php _e('1. Personal Details', 'wpml_theme');?></legend>
                                <fieldset>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ( ($value['item']['element'] == 'dob_dd' || $value['item']['element'] == 'dob_mm' || $value['item']['element'] == 'dob_yy' || $value['item']['element'] == 'dob') && $value['item']['status'] == 'error' ? ' has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="dob_dd"><?php _e('Date of Birth', 'wpml_theme');?></label>
                                        <div class="col-md-3">
                                            <select name="dob_dd" id="dob_dd" class="form-control col-md-3" title="You must be over 18.">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="01" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '01' ) { echo ' selected'; } ?>>01</option>
                                                <option value="02" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '02' ) { echo ' selected'; } ?>>02</option>
                                                <option value="03" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '03' ) { echo ' selected'; } ?>>03</option>
                                                <option value="04" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '04' ) { echo ' selected'; } ?>>04</option>
                                                <option value="05" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '05' ) { echo ' selected'; } ?>>05</option>
                                                <option value="06" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '06' ) { echo ' selected'; } ?>>06</option>
                                                <option value="07" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '07' ) { echo ' selected'; } ?>>07</option>
                                                <option value="08" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '08' ) { echo ' selected'; } ?>>08</option>
                                                <option value="09" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '09' ) { echo ' selected'; } ?>>09</option>
                                                <option value="10" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '10' ) { echo ' selected'; } ?>>10</option>
                                                <option value="11" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '11' ) { echo ' selected'; } ?>>11</option>
                                                <option value="12" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '12' ) { echo ' selected'; } ?>>12</option>
                                                <option value="13" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '13' ) { echo ' selected'; } ?>>13</option>
                                                <option value="14" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '14' ) { echo ' selected'; } ?>>14</option>
                                                <option value="15" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '15' ) { echo ' selected'; } ?>>15</option>
                                                <option value="16" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '16' ) { echo ' selected'; } ?>>16</option>
                                                <option value="17" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '17' ) { echo ' selected'; } ?>>17</option>
                                                <option value="18" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '18' ) { echo ' selected'; } ?>>18</option>
                                                <option value="19" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '19' ) { echo ' selected'; } ?>>19</option>
                                                <option value="20" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '20' ) { echo ' selected'; } ?>>20</option>
                                                <option value="21" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '21' ) { echo ' selected'; } ?>>21</option>
                                                <option value="22" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '22' ) { echo ' selected'; } ?>>22</option>
                                                <option value="23" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '23' ) { echo ' selected'; } ?>>23</option>
                                                <option value="24" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '24' ) { echo ' selected'; } ?>>24</option>
                                                <option value="25" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '25' ) { echo ' selected'; } ?>>25</option>
                                                <option value="26" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '26' ) { echo ' selected'; } ?>>26</option>
                                                <option value="27" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '27' ) { echo ' selected'; } ?>>27</option>
                                                <option value="28" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '28' ) { echo ' selected'; } ?>>28</option>
                                                <option value="29" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '29' ) { echo ' selected'; } ?>>29</option>
                                                <option value="30" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '30' ) { echo ' selected'; } ?>>30</option>
                                                <option value="31" <?php if( $_POST['dob_dd'] && $_POST['dob_dd'] == '31' ) { echo ' selected'; } ?>>31</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'dob_dd' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                        <div class="col-md-3">
                                            <select name="dob_mm" id="dob_mm" class="form-control col-md-3" title="You must be over 18.">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="01" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '01' ) { echo ' selected'; } ?>>01 - January</option>
                                                <option value="02" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '02' ) { echo ' selected'; } ?>>02 - February</option>
                                                <option value="03" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '03' ) { echo ' selected'; } ?>>03 - March</option>
                                                <option value="04" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '04' ) { echo ' selected'; } ?>>04 - April</option>
                                                <option value="05" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '05' ) { echo ' selected'; } ?>>05 - May</option>
                                                <option value="06" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '06' ) { echo ' selected'; } ?>>06 - June</option>
                                                <option value="07" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '07' ) { echo ' selected'; } ?>>07 - July</option>
                                                <option value="08" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '08' ) { echo ' selected'; } ?>>08 - August</option>
                                                <option value="09" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '09' ) { echo ' selected'; } ?>>09 - September</option>
                                                <option value="10" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '10' ) { echo ' selected'; } ?>>10 - October</option>
                                                <option value="11" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '11' ) { echo ' selected'; } ?>>11 - November</option>
                                                <option value="12" <?php if( $_POST['dob_mm'] && $_POST['dob_mm'] == '12' ) { echo ' selected'; } ?>>12 - December</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'dob_mm' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                        <div class="col-md-3">
                                            <select name="dob_yy" id="dob_yy" class="form-control col-md-3" title="You must be over 18.">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <?php for($i=1900; $i <= date('Y'); $i++) { ?>
                                                    <option value="<?php echo $i; ?>" <?php if($_POST['dob_yy'] == $i) { echo ' selected';}?>><?php echo $i; ?></option>
                                                <?php } ?>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'dob_yy' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'dob' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'address1' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="address1"><?php _e('Address Line 1', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="address1" name="address1" maxlength="25" title="Address Line 1" placeholder="<?php _e('Address Line 1', 'wpml_theme');?>" value="<?php if( $_POST['address1']) { echo $address1; } ?>">
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'address1' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label col-md-3" for="address2"><?php _e('Address Line 2', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="address2" name="address2" maxlength="25" title="Address Line 2" placeholder="<?php _e('Address Line 2', 'wpml_theme');?>" value="<?php if( $_POST['address2']) { echo $address2; } ?>">
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'city' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="city"><?php _e('City/Town', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="city" name="city" maxlength="25" title="City/Town" placeholder="<?php _e('City/Town', 'wpml_theme');?>" value="<?php if( $_POST['city']) { echo $city; } ?>">
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'city' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'postCode' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="postCode"><?php _e('Post Code', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" value="<?php if( $_POST['postCode']) { echo $post_code; } ?>" id="postCode" name="postCode" maxlength="25" title="Poct Code" placeholder="<?php _e('Post Code', 'wpml_theme');?>">
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'postCode' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'us_taxpayer' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('Are you a U.S. citizen or U.S. Resident for tax purposes?', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'us_taxpayer' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="us_taxpayer_yes">
                                                <input type="radio" id="us_taxpayer_yes" name="us_taxpayer" value="1" <?php if( $_POST['us_taxpayer'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('Yes', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="us_taxpayer_no">
                                                <input type="radio" id="us_taxpayer_no" name="us_taxpayer" value="0" <?php if( $_POST['us_taxpayer'] == '0') { echo 'checked="checked"'; } ?>>
                                               	<?php _e('No', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'us_taxpayer' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group tinToggle <?php if( $_POST['us_taxpayer'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'tin' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="col-md-12">
                                            <?php _e('Provide us with your U.S. Taxpayer Identification Number ("TIN")', 'wpml_theme');?>
                                        </label>
                                        <label class="control-label col-md-3" for="tin"><?php _e('TIN', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="tin" name="tin" title="Taxpayer Identification Number ('TIN')" placeholder="<?php _e('Taxpayer Identification Number (\'TIN\')', 'wpml_theme');?>" value="<?php if( $_POST['tin']) { echo $tin; } ?>">
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'tin' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                     <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'pep' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('Are you a <a href="https://www.forex24.com/politically-exposed-person-definition/" target="_blank">Politically Exposed Person</a> (PEP)?', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'pep' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="pep_yes">
                                                <input type="radio" id="pep_yes" name="pep" value="1" <?php if( $_POST['pep'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('Yes', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="pep_no">
                                                <input type="radio" id="pep_no" name="pep" value="0" <?php if( $_POST['pep'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('No', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'pep' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'education' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="education"><?php _e('Education', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="education" id="education" class="form-control col-md-9" title="Education">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="secondary" <?php if( $_POST['education'] && $_POST['education'] == 'secondary' ) { echo ' selected'; } ?>>Secondary</option>
                                                <option value="high school" <?php if( $_POST['education'] && $_POST['education'] == 'high school' ) { echo ' selected'; } ?>>High School</option>
                                                <option value="bachelor degree" <?php if( $_POST['education'] && $_POST['education'] == 'bachelor degree' ) { echo ' selected'; } ?>>Bachelor's Degree</option>
                                                <option value="masters degree" <?php if( $_POST['education'] && $_POST['education'] == "masters degree" ) { echo ' selected'; } ?>>Master's Degree</option>
                                                <option value="doctorate" <?php if( $_POST['education'] && $_POST['education'] == 'doctorate' ) { echo ' selected'; } ?>>Doctorate</option>
                                                <option value="professional" <?php if( $_POST['education'] && $_POST['education'] == 'professional' ) { echo ' selected'; } ?>>Professional</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'education' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'employment' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="employment"><?php _e('Employment', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="employment" id="employment" class="form-control col-md-9" title="Employment">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="employed" <?php if( $_POST['employment'] && $_POST['employment'] == 'employed' ) { echo ' selected'; } ?>>Employed</option>
                                                <option value="self-employed" <?php if( $_POST['employment'] && $_POST['employment'] == 'self-employed' ) { echo ' selected'; } ?>>Self-Employed</option>
                                                <option value="retired" <?php if( $_POST['employment'] && $_POST['employment'] == 'retired' ) { echo ' selected'; } ?>>Retired</option>
                                                <option value="student" <?php if( $_POST['employment'] && $_POST['employment'] == 'student' ) { echo ' selected'; } ?>>Student</option>
                                                <option value="unemployed" <?php if( $_POST['employment'] && $_POST['employment'] == 'unemployed' ) { echo ' selected'; } ?>>Unemployed</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'employment' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                </fieldset>

                                <legend><?php _e('2. Investor Information', 'wpml_theme');?></legend>
                                <fieldset>


                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'annualincome' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="annualincome"><?php _e('Annual Income (in EUR)', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="annualincome" id="annualincome" class="form-control col-md-9" title="Annual Income (in EUR)">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="0 - 15.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '0 - 15.000' ) { echo ' selected'; } ?>>0 - 15.000</option>
                                                <option value="15.001 - 30.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '15.001 - 30.000' ) { echo ' selected'; } ?>>15.001 - 30.000</option>
                                                <option value="30.001 - 50.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '30.001 - 50.000' ) { echo ' selected'; } ?>>30.001 - 50.000</option>
                                                <option value="50.001 - 100.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '50.001 - 100.000' ) { echo ' selected'; } ?>>50.001 - 100.000</option>
                                                <option value="100.001 - 500.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '100.001 - 500.000' ) { echo ' selected'; } ?>>100.001 - 500.000</option>
                                                <option value="500.001 - 1.000.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '500.001 - 1.000.000' ) { echo ' selected'; } ?>>500.001 - 1.000.000</option>
                                                <option value="> 1.000.000" <?php if( $_POST['annualincome'] && $_POST['annualincome'] == '> 1.000.000' ) { echo ' selected'; } ?>>> 1.000.000</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'annualincome' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'sourceofincome' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="sourceofincome"><?php _e('Source of Income', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="sourceofincome" id="sourceofincome" class="form-control col-md-9" title="Source of Income">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="salary" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'salary' ) { echo ' selected'; } ?>>Salary</option>
                                                <option value="savings/investments" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'savings/investments' ) { echo ' selected'; } ?>>Savings/Investments</option>
                                                <option value="partner/parent/family" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'partner/parent/family' ) { echo ' selected'; } ?>>Partner/Parent/Family</option>
                                                <option value="benefits/borrowing" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'benefits/borrowing' ) { echo ' selected'; } ?>>Benefits/Borrowing</option>
                                                <option value="pension" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'pension' ) { echo ' selected'; } ?>>Pension</option>
                                                <option value="inheritance" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'inheritance' ) { echo ' selected'; } ?>>Inheritance</option>
                                                <option value="real estate" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'real estate' ) { echo ' selected'; } ?>>Real Estate</option>
                                                <option value="other" <?php if( $_POST['sourceofincome'] && $_POST['sourceofincome'] == 'other' ) { echo ' selected'; } ?>>Other</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'sourceofincome' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group sourceOfIncomeToggle <?php if( $_POST['sourceofincome'] != 'other') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'sourceofincomeother' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="other"><?php _e('Other', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" id="sourceofincomeother" name="sourceofincomeother" title="Source of Income (Other)" value="<?php if($_POST['sourceofincomeother']) { echo $source_of_income_other;}?>" placeholder="<?php _e('Please State', 'wpml_theme');?>">
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'sourceofincomeother' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'estimatenetworth' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="estimatenetworth"><?php _e('Estimated Net Worth (in EUR)', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="estimatenetworth" id="estimatenetworth" class="form-control col-md-9" title="Estimated Net Worth (in EUR)">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="0 - 50.000" <?php if( $_POST['estimatenetworth'] && $_POST['estimatenetworth'] == '0 - 50.000' ) { echo ' selected'; } ?>>0 - 50.000</option>
                                                <option value="50.001 - 250.000" <?php if( $_POST['estimatenetworth'] && $_POST['estimatenetworth'] == '50.001 - 250.000' ) { echo ' selected'; } ?>>50.001 - 250.000</option>
                                                <option value="250.001 - 500.000" <?php if( $_POST['estimatenetworth'] && $_POST['estimatenetworth'] == '250.001 - 500.000' ) { echo ' selected'; } ?>>250.001 - 500.000</option>
                                                <option value="500.001 - 1.000.000" <?php if( $_POST['estimatenetworth'] && $_POST['estimatenetworth'] == '500.001 - 1.000.000' ) { echo ' selected'; } ?>>500.001 - 1.000.000</option>
                                                <option value="> 1.000.000" <?php if( $_POST['estimatenetworth'] && $_POST['estimatenetworth'] == '> 1.000.000' ) { echo ' selected'; } ?>>> 1.000.000</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'estimatenetworth' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'purposeofopeningtradingaccount' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="purposeofopeningtradingaccount"><?php _e('Purpose of Opening a Trading Account', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="purposeofopeningtradingaccount" id="purposeofopeningtradingaccount" class="form-control col-md-9" title="Purpose of Opening a Trading Account">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="speculation" <?php if( $_POST['purposeofopeningtradingaccount'] && $_POST['purposeofopeningtradingaccount'] == 'speculation' ) { echo ' selected'; } ?>>Speculation</option>
                                                <option value="hedging" <?php if( $_POST['purposeofopeningtradingaccount'] && $_POST['purposeofopeningtradingaccount'] == 'hedging' ) { echo ' selected'; } ?>>Hedging</option>
                                                <option value="investment" <?php if( $_POST['purposeofopeningtradingaccount'] && $_POST['purposeofopeningtradingaccount'] == 'investment' ) { echo ' selected'; } ?>>Investment</option>
                                                <option value="diversification" <?php if( $_POST['purposeofopeningtradingaccount'] && $_POST['purposeofopeningtradingaccount'] == 'diversification' ) { echo ' selected'; } ?>>Diversification</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'purposeofopeningtradingaccount' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'anticipatedamounttospendwithusforthenexttwelvemonths' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="anticipatedamounttospendwithusforthenexttwelvemonths"><?php _e('Anticipated amount available to trade with us within then next 12 months (in EUR)', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="anticipatedamounttospendwithusforthenexttwelvemonths" id="anticipatedamounttospendwithusforthenexttwelvemonths" class="form-control col-md-9" title="Anticipated amount available to trade with us within then next 12 months (in EUR)">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="up to 10.000" <?php if( $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] && $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] == 'up to 10.000' ) { echo ' selected'; } ?>>Up to 10.000</option>
                                                <option value="10.001 - 50.000" <?php if( $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] && $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] == '10.001 - 50.000' ) { echo ' selected'; } ?>>10.001 - 50.000</option>
                                                <option value="50.001 - 100.000" <?php if( $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] && $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] == '50.001 - 100.000' ) { echo ' selected'; } ?>>50.001 - 100.000</option>
                                                <option value="> 100.000" <?php if( $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] && $_POST['anticipatedamounttospendwithusforthenexttwelvemonths'] == '> 100.000' ) { echo ' selected'; } ?>>> 100.000</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'anticipatedamounttospendwithusforthenexttwelvemonths' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                </fieldset>

                                <legend><?php _e('3. Appropriateness', 'wpml_theme');?></legend>

                                <div class="alert alert-info" role="alert"><?php _e('<strong>ATTENTION:</strong> Please note that your responses to the following questions will determin the maximum leverage of your trading account.', 'wpml_theme');?></div>

                                <fieldset>
                                    <h4><?php _e('Experience', 'wpml_theme');?></h4>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'experience' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('Do you have any experience or qualifications which would help you to understand trading in leveraged products?', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'experience' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="experience_yes">
                                                <input type="radio" id="experience_yes" name="experience" value="1" <?php if( $_POST['experience'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('Yes', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="experience_no">
                                                <input type="radio" id="experience_no" name="experience" value="0" <?php if( $_POST['experience'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('No', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'experience' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <!--<div class="form-group experienceToggle <?php //if( $_POST['experience'] != '1') { echo 'collapse'; } ?> <?php //foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'experiencespecify' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="experiencespecify">&nbsp;</label>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" id="experiencespecify" name="experiencespecify" title="Specify Trading Experience" value="<?php //if( $_POST['experiencespecify']) { echo $experiencespecify; } ?>" placeholder="Please specify">
											<p class="help-block"><?php //foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'experiencespecify' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>-->

                                    <div class="form-group">
                                        <label class="portal-register-label col-md-12 text-left">
                                            <?php _e('Which of the following financial products have you traded in the last 3 years?', 'wpml_theme');?>
                                        </label>
                                        <label class="control-label col-md-6 col-md-offset-3 checkbox" for="traded_cfds">
                                            <input type="checkbox" name="traded_cfds" id="traded_cfds" value="1" <?php if( $_POST['traded_cfds'] == '1') { echo 'checked="checked"'; } ?>>
                                            <?php _e('CFD\'s (Forex, Metals, Commodities)', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group tradedCfdsFrequencyToggle <?php if( $_POST['traded_cfds'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_cfds_frequency' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="traded_cfds_frequency"><?php _e('Frequency of transactions', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="traded_cfds_frequency" id="traded_cfds_frequency" class="form-control">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="daily" <?php if( $_POST['traded_cfds_frequency'] && $_POST['traded_cfds_frequency'] == 'daily' ) { echo ' selected'; } ?>><?php _e('Daily', 'wpml_theme');?></option>
                                                <option value="weekly" <?php if( $_POST['traded_cfds_frequency'] && $_POST['traded_cfds_frequency'] == 'weekly' ) { echo ' selected'; } ?>><?php _e('Weekly', 'wpml_theme');?></option>
                                                <option value="monthly" <?php if( $_POST['traded_cfds_frequency'] && $_POST['traded_cfds_frequency'] == 'monthly' ) { echo ' selected'; } ?>><?php _e('Monthly', 'wpml_theme');?></option>
                                                <option value="yearly" <?php if( $_POST['traded_cfds_frequency'] && $_POST['traded_cfds_frequency'] == 'yearly' ) { echo ' selected'; } ?>><?php _e('Yearly', 'wpml_theme');?></option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_cfds_frequency' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group tradedCfdsVolumeToggle <?php if( $_POST['traded_cfds'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_cfds_volume' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                       <label class="control-label col-md-3" for="traded_cfds_volume"><?php _e('Average volume size per transaction (USD)', 'wpml_theme');?>:</label>
                                       <div class="col-md-9">
                                          <select name="traded_cfds_volume" id="traded_cfds_volume" class="form-control">
                                             <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                             <option value="Less than $10,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == 'Less than $10,000' ) { echo ' selected'; } ?>>Less than $10,000</option>
                                             <option value="$10,000 – $20,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$10,000 – $20,000' ) { echo ' selected'; } ?>>$10,000 – $20,000</option>
                                             <option value="$20,000 – $30,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$20,000 – $30,000' ) { echo ' selected'; } ?>>$20,000 – $30,000</option>
                                             <option value="$30,000 – $40,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$30,000 – $40,000' ) { echo ' selected'; } ?>>$30,000 – $40,000</option>
                                             <option value="$40,000 – $50,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$40,000 – $50,000' ) { echo ' selected'; } ?>>$40,000 – $50,000</option>
                                             <option value="$50,000 – $100,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$50,000 – $100,000' ) { echo ' selected'; } ?>>$50,000 – $100,000</option>
                                             <option value="$100,000 – $150,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$100,000 – $150,000' ) { echo ' selected'; } ?>>$100,000 – $150,000</option>
                                             <option value="$150,000 – $200,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$150,000 – $200,000' ) { echo ' selected'; } ?>>$150,000 – $200,000</option>
                                             <option value="$200,000 – $250,000" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$200,000 – $250,000' ) { echo ' selected'; } ?>>$200,000 – $250,000</option>
                                             <option value="$250,000 or more" <?php if( $_POST['traded_cfds_volume'] && $_POST['traded_cfds_volume'] == '$250,000 or more' ) { echo ' selected'; } ?>>$250,000 or more</option>
                                          </select>
										 <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_cfds_volume' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                       </div>
                                    </div>

                                  <div class="form-group">
                                     <label class="col-md-6 col-md-offset-3 checkbox" for="traded_other_derivatives">
                                     <input class="checkbox" type="checkbox" name="traded_other_derivatives" id="traded_other_derivatives" value="1" <?php if( $_POST['traded_other_derivatives'] == '1') { echo 'checked="checked"'; } ?>>
                                     <?php _e('Other Derivatives (Swaps, Futures, Options)', 'wpml_theme');?>
                                     </label>
                                  </div>

                                  <div class="form-group tradedOtherDerivativesFrequencyToggle <?php if( $_POST['traded_other_derivatives'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_other_derivatives_frequency' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="traded_other_derivatives_frequency"><?php _e('Frequency of transactions', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="traded_other_derivatives_frequency" id="traded_other_derivatives_frequency" class="form-control">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="daily" <?php if( $_POST['traded_other_derivatives_frequency'] && $_POST['traded_other_derivatives_frequency'] == 'daily' ) { echo ' selected'; } ?>>Daily</option>
                                                <option value="weekly" <?php if( $_POST['traded_other_derivatives_frequency'] && $_POST['traded_other_derivatives_frequency'] == 'weekly' ) { echo ' selected'; } ?>>Weekly</option>
                                                <option value="monthly" <?php if( $_POST['traded_other_derivatives_frequency'] && $_POST['traded_other_derivatives_frequency'] == 'monthly' ) { echo ' selected'; } ?>>Monthly</option>
                                                <option value="yearly" <?php if( $_POST['traded_other_derivatives_frequency'] && $_POST['traded_other_derivatives_frequency'] == 'yearly' ) { echo ' selected'; } ?>>Yearly</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_other_derivatives_frequency' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group tradedOtherDerivativesVolumeToggle <?php if( $_POST['traded_other_derivatives'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_other_derivatives_volume' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                       <label class="control-label col-md-3" for="traded_other_derivatives_volume"><?php _e('Average volume size per transaction (USD)', 'wpml_theme');?>:</label>
                                       <div class="col-md-9">
                                          <select name="traded_other_derivatives_volume" id="traded_other_derivatives_volume" class="form-control">
                                             <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                             <option value="Less than $10,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == 'Less than $10,000' ) { echo ' selected'; } ?>>Less than $10,000</option>
                                             <option value="$10,000 – $20,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$10,000 – $20,000' ) { echo ' selected'; } ?>>$10,000 – $20,000</option>
                                             <option value="$20,000 – $30,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$20,000 – $30,000' ) { echo ' selected'; } ?>>$20,000 – $30,000</option>
                                             <option value="$30,000 – $40,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$30,000 – $40,000' ) { echo ' selected'; } ?>>$30,000 – $40,000</option>
                                             <option value="$40,000 – $50,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$40,000 – $50,000' ) { echo ' selected'; } ?>>$40,000 – $50,000</option>
                                             <option value="$50,000 – $100,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$50,000 – $100,000' ) { echo ' selected'; } ?>>$50,000 – $100,000</option>
                                             <option value="$100,000 – $150,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$100,000 – $150,000' ) { echo ' selected'; } ?>>$100,000 – $150,000</option>
                                             <option value="$150,000 – $200,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$150,000 – $200,000' ) { echo ' selected'; } ?>>$150,000 – $200,000</option>
                                             <option value="$200,000 – $250,000" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$200,000 – $250,000' ) { echo ' selected'; } ?>>$200,000 – $250,000</option>
                                             <option value="$250,000 or more" <?php if( $_POST['traded_other_derivatives_volume'] && $_POST['traded_other_derivatives_volume'] == '$250,000 or more' ) { echo ' selected'; } ?>>$250,000 or more</option>
                                          </select>
										  <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'traded_other_derivatives_volume' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                       </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-6 col-md-offset-3 checkbox" for="shares_bonds">
                                        <input type="checkbox" name="shares_bonds" id="shares_bonds" value="1" <?php if( $_POST['shares_bonds'] == '1') { echo 'checked="checked"'; } ?>>
                                        <?php _e('Shares/Bonds', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group tradedSharesBondsFrequencyToggle <?php if( $_POST['shares_bonds'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'shares_bonds_frequency' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="shares_bonds_frequency"><?php _e('Frequency of transactions', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="shares_bonds_frequency" id="shares_bonds_frequency" class="form-control">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="daily" <?php if( $_POST['shares_bonds_frequency'] && $_POST['shares_bonds_frequency'] == 'daily' ) { echo ' selected'; } ?>>Daily</option>
                                                <option value="weekly" <?php if( $_POST['shares_bonds_frequency'] && $_POST['shares_bonds_frequency'] == 'weekly' ) { echo ' selected'; } ?>>Weekly</option>
                                                <option value="monthly" <?php if( $_POST['shares_bonds_frequency'] && $_POST['shares_bonds_frequency'] == 'monthly' ) { echo ' selected'; } ?>>Monthly</option>
                                                <option value="yearly" <?php if( $_POST['shares_bonds_frequency'] && $_POST['shares_bonds_frequency'] == 'yearly' ) { echo ' selected'; } ?>>Yearly</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'shares_bonds_frequency' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group tradedSharesBondsVolumeToggle  <?php if( $_POST['shares_bonds'] != '1') { echo 'collapse'; } ?> <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'shares_bonds_volume' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                       <label class="control-label col-md-3" for="shares_bonds_volume"><?php _e('Average volume size per transaction (USD)', 'wpml_theme');?>:</label>
                                       <div class="col-md-9">
                                          <select name="shares_bonds_volume" id="shares_bonds_volume" class="form-control">
                                             <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                             <option value="Less than $10,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == 'Less than $10,000' ) { echo ' selected'; } ?>>Less than $10,000</option>
                                             <option value="$10,000 – $20,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$10,000 – $20,000' ) { echo ' selected'; } ?>>$10,000 – $20,000</option>
                                             <option value="$20,000 – $30,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '3' ) { echo ' selected'; } ?>>$20,000 – $30,000</option>
                                             <option value="$20,000 – $30,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$20,000 – $30,000' ) { echo ' selected'; } ?>>$30,000 – $40,000</option>
                                             <option value="$40,000 – $50,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$40,000 – $50,000' ) { echo ' selected'; } ?>>$40,000 – $50,000</option>
                                             <option value="$50,000 – $100,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$50,000 – $100,000' ) { echo ' selected'; } ?>>$50,000 – $100,000</option>
                                             <option value="$100,000 – $150,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$100,000 – $150,000' ) { echo ' selected'; } ?>>$100,000 – $150,000</option>
                                             <option value="$150,000 – $200,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$150,000 – $200,000' ) { echo ' selected'; } ?>>$150,000 – $200,000</option>
                                             <option value="$200,000 – $250,000" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$200,000 – $250,000' ) { echo ' selected'; } ?>>$200,000 – $250,000</option>
                                             <option value="$250,000 or more" <?php if( $_POST['shares_bonds_volume'] && $_POST['shares_bonds_volume'] == '$250,000 or more' ) { echo ' selected'; } ?>>$250,000 or more</option>
                                          </select>
										  <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'shares_bonds_volume' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                       </div>
                                    </div>
     
                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'attended_course_or_seminar_on_cfds_or_forex' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('Have you attended a course or seminar on CFDs or Forex?', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'attended_course_or_seminar_on_cfds_or_forex' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="attended_course_or_seminar_on_cfds_or_forex_yes">
                                                <input type="radio" id="attended_course_or_seminar_on_cfds_or_forex_yes" name="attended_course_or_seminar_on_cfds_or_forex" value="1" <?php if( $_POST['attended_course_or_seminar_on_cfds_or_forex'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('Yes', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="attended_course_or_seminar_on_cfds_or_forex_no">
                                                <input type="radio" id="attended_course_or_seminar_on_cfds_or_forex_no" name="attended_course_or_seminar_on_cfds_or_forex" value="0" <?php if( $_POST['attended_course_or_seminar_on_cfds_or_forex'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('No', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'attended_course_or_seminar_on_cfds_or_forex' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'employed_as_a_professional_in_financial_institution' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('Have you ever been employed as a Professional in a Financial Institution and/or been in employment involved in Trading of Financial Instruments?', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'employed_as_a_professional_in_financial_institution' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="employed_as_a_professional_in_financial_institution_yes">
                                                <input type="radio" id="employed_as_a_professional_in_financial_institution_yes" name="employed_as_a_professional_in_financial_institution" value="1" <?php if( $_POST['employed_as_a_professional_in_financial_institution'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('Yes', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="employed_as_a_professional_in_financial_institution_no">
                                                <input type="radio" id="employed_as_a_professional_in_financial_institution_no" name="employed_as_a_professional_in_financial_institution" value="0" <?php if( $_POST['employed_as_a_professional_in_financial_institution'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('No', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'employed_as_a_professional_in_financial_institution' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <h4><?php _e('Trading Quiz', 'wpml_theme');?></h4>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'trading_with_higher_leverage' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('Trading with a higher leverage in CFDs means you will open a trade of a larger volume, thus increasing the risk of loss.', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'trading_with_higher_leverage' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="trading_with_higher_leverage_yes">
                                                <input type="radio" id="trading_with_higher_leverage_yes" name="trading_with_higher_leverage" value="1" <?php if( $_POST['trading_with_higher_leverage'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('True', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="trading_with_higher_leverage_no">
                                                <input type="radio" id="trading_with_higher_leverage_no" name="trading_with_higher_leverage" value="0" <?php if( $_POST['trading_with_higher_leverage'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('False', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'trading_with_higher_leverage' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'the_market_is_moving_against_your_position' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('The market is moving against your position. Your CFD position will close automatically if your equity reaches the maintenance margin.', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'the_market_is_moving_against_your_position' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="the_market_is_moving_against_your_position_yes">
                                                <input type="radio" id="the_market_is_moving_against_your_position_yes" name="the_market_is_moving_against_your_position" value="1" <?php if( $_POST['the_market_is_moving_against_your_position'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('True', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="the_market_is_moving_against_your_position_no">
                                                <input type="radio" id="the_market_is_moving_against_your_position_no" name="the_market_is_moving_against_your_position" value="0" <?php if( $_POST['the_market_is_moving_against_your_position'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('False', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'the_market_is_moving_against_your_position' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'value_of_your_initial_position_in_a_cfd_contract' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-12">
                                            <?php _e('If the value of your initial position in a CFD contract is $10,000 and the leverage ratio is 1:50, then the initial margin requirement would be 4% (i.e. $400)', 'wpml_theme');?>
                                        </label>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'value_of_your_initial_position_in_a_cfd_contract' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <div class="controls col-md-6 col-md-offset-3">
                                            <label class="radio-inline control-label" for="value_of_your_initial_position_in_a_cfd_contract_yes">
                                                <input type="radio" id="value_of_your_initial_position_in_a_cfd_contract_yes" name="value_of_your_initial_position_in_a_cfd_contract" value="1" <?php if( $_POST['value_of_your_initial_position_in_a_cfd_contract'] == '1') { echo 'checked="checked"'; } ?>>
                                                <?php _e('True', 'wpml_theme');?>
                                            </label>
                                            <label class="radio-inline control-label" for="value_of_your_initial_position_in_a_cfd_contract_no">
                                                <input type="radio" id="value_of_your_initial_position_in_a_cfd_contract_no" name="value_of_your_initial_position_in_a_cfd_contract" value="0" <?php if( $_POST['value_of_your_initial_position_in_a_cfd_contract'] == '0') { echo 'checked="checked"'; } ?>>
                                                <?php _e('False', 'wpml_theme');?>
                                            </label>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'value_of_your_initial_position_in_a_cfd_contract' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                </fieldset>

                                <legend><?php _e('4. Trading Account', 'wpml_theme');?></legend>
                                <fieldset>
                                
                                <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'tradingplatform' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="tradingPlatform"><?php _e('Trading Platform', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="tradingplatform" id="tradingplatform" class="form-control col-md-9" title="Trading Platform">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
												<?php if( $_POST['utm_source'] != 'zulutrade' && $_POST['utm_source'] != 'WL_Signup' && $_POST['utm_source'] != 'lp'  ) { ?>
													<option value="mt4" <?php if( $_POST['tradingplatform'] && $_POST['tradingplatform'] == 'mt4' ) { echo ' selected'; } ?>>MT4</option>
												<?php } ?>
                                                <option value="zulutrade" <?php if( $_POST['tradingplatform'] && $_POST['tradingplatform'] == 'zulutrade' ) { echo ' selected'; } ?>>ZuluTrade</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'tradingplatform' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

									<div class="form-group tradingPlatformZuluToggle collapse">
                                        <div class="col-md-12">
                                            <div id="lod_terms">
												<?php _e('<strong>Letter of Direction Form (LOD)</strong><br/><br/>
												<p>The undersigned (hereinafter the “Client”) hereby grants permission to link his/her Lydya Financial Ltd (with brand name: Forex24) trading account with Triple A Experts S.A. and use the services provided by Triple A Experts S.A., (hereby called ‘ZuluTrade’), pursuant to the Limited Power of Attorney granted by the Client to Triple A Experts S.A. whereby the Client authorizes Triple A to manage his/her account with Lydya Financial Ltd (“Managed Account”) as per the provisions of the Limited Power of Attorney.<br/><br/>
												The Client agrees to the following conditions:<br/><br/>
												1. That Lydya Financial Ltd has made no representation regarding the potential profitability of the ZuluTrade service.<br/><br/>
												2. That client is fully aware of the risk involved in trading in the foreign exchange market, and that Lydya Financial Ltd holds no liability for any losses to client’s account caused by mechanical, software, communication failure, system error or any other causes beyond its immediate control.<br/><br/>
												3. That Lydya Financial Ltd shall execute the signals generated by the Zulu Trade as delivered to Lydya Financial Ltd and that Lydya Financial Ltd takes no responsibility for advising the client of any changes, alterations, enhancements or optimizations made by ZuluTrade.<br/><br/>
												4. That Triple A is not permitted to make a deposit or withdrawal of funds into or from the client’s account. Only the owner of the trading account has the right to deposit and withdraw funds from the trading account.<br/><br/>
												5. That the client gives consent to Lydya Financial Ltd to increase the spreads by one pip for every round turn transaction executed in any account traded with Lydya Financial Ltd that subscribes to ZuluTrade. The increase in spreads is a Software Transmission Fee (STF) charged for as long as the undersigned client is using the ZuluTrade services.<br/><br/>
												6. That this LOD shall remain valid until revoked in writing by the client. This LOD shall not expire upon the death, bankruptcy or the loss of legal capacity of the client.<br/><br/>
												<strong>LIMITATION OF LIABILITY</strong><br/><br/>
												You understand that in no event will Lydya Financial Ltd or its officers, directors, shareholders, parents, subsidiaries, affiliates, employees, agents, licensors or any data provider be liable for any consequential, punitive, incidental, special or indirect damages, loss of business revenue or lost profits arising as result of your use of the Managed Account or through the acts or omissions of the account manager, whether in an action under contract, negligence or any other theory, even if Lydya Financial Ltd is advised of the possibility of such.<br/><br/>
												<strong>INDEMNIFICATION</strong><br/><br/>
												By signing you are hereby agree to indemnify, defend and hold harmless Lydya Financial Ltd and its officers, directors, shareholders, parents, subsidiaries, affiliates, employees, plan sponsors, consultants, agents and licensors from and against any and all third-party claims, liability, damages and/or costs (including, but not limited to, reasonable attorneys’ fees) arising from your use of a ZuluTrade account, including without limitation, any failure to comply with the terms and conditions of Lydya Financial Ltd websites, or other right of a third party, or from a violation of applicable law.<br/><br/>
												By signing below, I acknowledge that I have received and read the above information pertaining to the ZuluTrade service and agree to the terms and conditions set forth herein. I hereby confirm that I understand the risks embodied in foreign exchange trading, including those risks particular to foreign exchange trade via copy trading and I hereby agree to indemnify and hold Lydya Financial Ltd harmless from, and against any and all liabilities, losses, damages, costs and expenses including attorney\'s fees, arising therefrom.<br/><br/>
												I further acknowledge and agree that Lydya Financial Ltd shall execute the signals sent by ZuluTrade as delivered to my Forex24 Trading Account, and Lydya Financial Ltd shall have no liability and responsibility for any losses to my Forex24 Trading Account(s) for any reasons including but not limited to bad strategy, mechanical error, software error or system error.</p>', 'wpml_theme');?>
											</div>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'lod_terms_btn' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

									<div class="form-group lod_terms collapse <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'lod_terms_btn' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
									   
                                       <div class="checkbox col-md-12">
                                          <label for="lod_terms" class="declaration">
                                          <input class="checkbox" type="checkbox" name="lod_terms_btn" id="lod_terms_btn" value="1" <?php if( $_POST['lod_terms_btn'] == '1') { echo 'checked="checked"'; } ?>>
                                          <span class="register-required">*</span><?php _e('I/we hereby acknowledge that I/we have read and consent to the statements listed above. I/we hereby agree that I/we understand and certify that I/we have the financial resources to enter into this agreement and that all trading objectives have been explained. I/we acknowledge having received, read and understood the foregoing letter of direction, limited power-of-attorney, service authorisation, and incorporated risk disclosures.', 'wpml_theme');?>
                                          </label>
										  <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'lod_terms_btn' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                       </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'accounttype' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="accountType"><?php _e('Account Type', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                        
                                            <select name="accounttype" id="accounttype" class="form-control col-md-9" title="Account Type">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                
                                                <?php if( $_POST['utm_source'] != 'zulutrade' && $_POST['utm_source'] != 'WL_Signup' && $_POST['utm_source'] != 'lp' ) { ?>
													<option value="bronze" <?php if( $_POST['accounttype'] && $_POST['accounttype'] == 'bronze' ) { echo ' selected'; } ?>><?php _e('Bronze', 'wpml_theme');?></option>
												<?php } ?>
												
												<?php if( $_POST['utm_source'] == '' ) { ?>
												
													<option value="silver" <?php if( $_POST['accounttype'] && $_POST['accounttype'] == 'silver' ) { echo ' selected'; } ?>><?php _e('Silver', 'wpml_theme');?></option>
													<option value="zulutrade" <?php if( $_POST['accounttype'] && $_POST['accounttype'] == 'zulutrade' ) { echo ' selected'; } ?>><?php _e('ZuluTrade', 'wpml_theme');?></option>
												 <?php } else if( $_POST['utm_source'] != '(direct)' && $_POST['utm_source'] == 'zulutrade' || $_POST['utm_source'] == 'WL_Signup' || $_POST['utm_source'] == 'lp' ) { ?>
												
													<option value="zulutrade" <?php if( $_POST['accounttype'] && $_POST['accounttype'] == 'zulutrade' ) { echo ' selected'; } ?>><?php _e('ZuluTrade', 'wpml_theme');?></option>
                                                <?php } ?>
                                                
                                                <?php if( $_POST['utm_source'] != 'zulutrade' && $_POST['utm_source'] != 'WL_Signup' && $_POST['utm_source'] != 'lp' ) { ?>
                                                	<option value="gold" <?php if( $_POST['accounttype'] && $_POST['accounttype'] == 'gold' ) { echo ' selected'; } ?>><?php _e('Gold', 'wpml_theme');?></option>
                                                <?php } ?>
                                                
												<?php if( $_POST['utm_source'] != 'zulutrade' && $_POST['utm_source'] != 'WL_Signup' && $_POST['utm_source'] != 'lp' ) { ?>
                                                	<option value="swap free" <?php if( $_POST['accounttype'] && $_POST['accounttype'] == 'swap free' ) { echo ' selected'; } ?>><?php _e('Swap Free', 'wpml_theme');?></option>
												<?php } ?>
												
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'accounttype' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'currency' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="currency"><?php _e('Currency', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="currency" id="currency" class="form-control col-md-9" title="Currency">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
												<option value="USD" <?php if( $_POST['currency'] && $_POST['currency'] == 'USD' ) { echo ' selected'; } ?>>USD</option>
                                                <option value="EUR" <?php if( $_POST['currency'] && $_POST['currency'] == 'EUR' ) { echo ' selected'; } ?>>EUR</option>
                                                <option value="GBP" <?php if( $_POST['currency'] && $_POST['currency'] == 'GBP' ) { echo ' selected'; } ?>>GBP</option>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'currency' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'leverage' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                        <label class="control-label col-md-3" for="leverage"><?php _e('Leverage', 'wpml_theme');?>:</label>
                                        <div class="col-md-9">
                                            <select name="leverage" id="leverage" class="form-control col-md-9" title="Leverage">
                                                <option value="">-<?php _e('Select', 'wpml_theme');?>-</option>
                                                <option value="10" <?php if( $_POST['leverage'] && $_POST['leverage'] == '10' ) { echo ' selected'; } ?>>1:10</option>
                                                <option value="30" <?php if( $_POST['leverage'] && $_POST['leverage'] == '30' ) { echo ' selected'; } ?>>1:30</option>
                                                <option value="50" <?php if( $_POST['leverage'] && $_POST['leverage'] == '50' ) { echo ' selected'; } ?>>1:50</option>
                                                <?php if ($_SESSION['liveRegistrationSession']['step1']['countryOfResidence'] !='MT') {?>
                                                		<option value="100" <?php if( $_POST['leverage'] && $_POST['leverage'] == '100' ) { echo ' selected'; } ?>>1:100</option>
                                                    	<?php if ($_SESSION['liveRegistrationSession']['step1']['countryOfResidence'] !='PL') {?>
                                                    		<option value="200" <?php if( $_POST['leverage'] && $_POST['leverage'] == '200' ) { echo ' selected'; } ?>>1:200</option>
                                                        	<option value="400" <?php if( $_POST['leverage'] && $_POST['leverage'] == '400' ) { echo ' selected'; } ?>>1:400</option>
                                                    	<?php }?>
                                                 <?php } ?>
                                            </select>
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'leverage' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                        </div>
                                    </div>

                                </fieldset>

                                <legend><?php _e('5. Client Area Credentials', 'wpml_theme');?></legend>
                                    <fieldset>

                                        <div class="form-group">
                                            <label class="control-label col-md-3" for="username"><?php _e('Username', 'wpml_theme');?></label>
                                            <div class="password_group col-md-9">
                                                <input name="username" type="text" id="username" class="form-control" placeholder="<?php _e('Username', 'wpml_theme');?>" value="<?php if( $_POST['email']) { echo $email; } ?>" readonly="readonly">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'password' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                            <label class="control-label col-md-3" for="password"><?php _e('Password', 'wpml_theme');?></label>
                                            <div class="password_group col-md-9">
                                                <input name="password" type="password" id="password" class="form-control" placeholder="<?php _e('Password (Minimum 8 Characters)', 'wpml_theme');?>" value="<?php if( $_POST['password']) { echo $password; } ?>">
												<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'password' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                                <span id="passstrength" class="text-success"></span>
                                                <div class="toogle_password"><i class="fa fa-eye"></i></div>
                                            </div>
                                            <p class="help-block col-md-9 col-md-offset-3">
                                                <small><i class="fa fa-lock pull-left"></i> <?php _e('Tip: Strong passwords uses a conbination of numbers, symbols, capital and small letters. If you want we can <a href="javascript: void(0);" id=\'generatePasswordBtn\'> generate </a> one for you.', 'wpml_theme');?></small>
                                            </p>
                                        </div>

                                        <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'confirmPassword' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                            <label class="control-label col-md-3" for="confirmPassword"><?php _e('Confirm Password', 'wpml_theme');?></label>
                                            <div class="password_group col-md-9">
                                                <input name="confirmPassword" type="password" id="confirmPassword" class="form-control" placeholder="<?php _e('Confirm Password (Minimum 8 Characters)', 'wpml_theme');?>" value="<?php if( $_POST['confirmPassword']) { echo $confirmPassword; } ?>">
												<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'confirmPassword' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                                <span id="passstrength" class="text-success"></span>
                                                <div class="toogle_password"><i class="fa fa-eye"></i></div>
                                            </div>
                                        </div>


                                    </fieldset>


                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8 col-md-offset-2">
                                
                              <?php //if( $appropriatness_final_score == 'cannot_open_account' || $appropriatness_final_score == 'restricted_leverage' ) { ?>
                              		<div id="appropriatenessRiskWarning">
                                	<fieldset>
                                	<legend><?php _e('Appropriateness Risk Warning', 'wpml_theme');?></legend>
	                              		<div class="form-group appropriatenessRiskWarning">
	                                        <div class="col-md-12">
	                                            <div id="appropriateness_risk_warning_terms">
													<strong><?php _e('WARNING!', 'wpml_theme');?></strong><br/><br/>
													<p><?php _e('Lydya Financial Ltd, the owners of Forex24 Global (the “Company”) would like to warn you and bring to your attention that, on the basis of the information provided to us by you, you do not seem to possess the appropriate experience and knowledge, as derived from the Law, to trade in the investment services (i.e. brokerage services) and financial instruments the Company offers (i.e. CFDs), which carry a high degree of risk. In this respect, the Company does not consider these investment service(s)/financial instrument(s) appropriate for you.<br/><br/>
													Should you wish to trade CFDs with the Company, even though the Company has warned you that these financial instruments are not appropriate for you, you could still proceed and trade in these financial instruments. The Company considers that by choosing the “Accept” button below, you acknowledge and accept that the envisaged investment services (i.e. brokerage services) and financial instruments the Company offers (i.e. CFDs) are not appropriate for you but you still wish to proceed with trading in financial instruments with the Company. Please note, the leverage of the account will be restricted to a maximum leverage of 1:50.', 'wpml_theme');?></p>
												</div>
	                                        </div>
	                                    </div>
	                                    
	                                    <div class="form-group appropriateness_risk_warning_terms <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'appropriateness_risk_warning_btn' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
									   		<div class="controls col-md-12">
									   		
									   		<label class="radio-inline control-label" for="appropriateness_risk_warning_accept_btn">
	                                        <input class="radio" type="radio" name="appropriateness_risk_warning_btn" id="appropriateness_risk_warning_accept_accept_btn" value="1" <?php if( $_POST['appropriateness_risk_warning_btn'] == '1') { echo 'checked="checked"'; } ?>><?php _e('Accept', 'wpml_theme');?></label>
	                                          
	                                         <label class="radio-inline control-label" for="appropriateness_risk_warning_decline_btn">
	                                         <input class="radio" type="radio" name="appropriateness_risk_warning_btn" id="appropriateness_risk_warning_decline_decline_btn" value="0" <?php if( $_POST['appropriateness_risk_warning_btn'] == '0') { echo 'checked="checked"'; } ?>><?php _e('Decline', 'wpml_theme');?></label>
	                                          									   		
											<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'appropriateness_risk_warning_btn' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
												
										</div>
                                       
                                    </div>
                                    </fieldset>
                              
                              <?php //}?>
                              		<!--<input type="hidden" name="appropriateness_risk_warning_btn" id="appropriateness_risk_warning_btn" value="0"/>-->
                              <?php //} ?>
                                </div>
                                <fieldset>
									<legend><?php _e('Communication', 'wpml_theme');?></legend>
                                    <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'communication_i_wish_to_receive_newsletters' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                            <label class="control-label col-md-12">
                                               <?php _e('I wish to receive newsletters and other communication material', 'wpml_theme');?>:
                                            </label>
                                        </div>

                                        <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'communication_i_wish_to_receive_newsletters' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                            <div class="controls col-md-12">
                                                <label class="radio-inline control-label" for="communication_i_wish_to_receive_newsletters_yes">
                                                    <input type="radio" id="communication_i_wish_to_receive_newsletters_yes" name="communication_i_wish_to_receive_newsletters" value="1" <?php if( $_POST['communication_i_wish_to_receive_newsletters'] == '1') { echo 'checked="checked"'; } ?>>
                                                    <?php _e('Yes', 'wpml_theme');?>
                                                </label>
                                                <label class="radio-inline control-label" for="communication_i_wish_to_receive_newsletters_no">
                                                    <input type="radio" id="communication_i_wish_to_receive_newsletters_no" name="communication_i_wish_to_receive_newsletters" value="0" <?php if( $_POST['communication_i_wish_to_receive_newsletters'] == '0') { echo 'checked="checked"'; } ?>>
                                                    <?php _e('No', 'wpml_theme');?>
                                                </label>
												<p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'communication_i_wish_to_receive_newsletters' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset>
                                        <legend><?php _e('Declaration', 'wpml_theme');?></legend>
                                        <div class="form-group <?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'terms' && $value['item']['status'] == 'error' ? 'has-error' : ''); }?>">
                                           <div class="checkbox col-md-12">
                                              <label for="terms" class="declaration">
                                              <input class="checkbox" type="checkbox" name="terms" id="terms" value="1" <?php if( $_POST['terms'] == '1') { echo 'checked="checked"'; } ?>>
                                              <span class="register-required">*</span><?php _e('I declare that I have read, fully understood and hereby accept the entire text of the <a href="https://www.forex24.com/about-us/legal-documents/client-agreement/" target="_blank">Client Agreement</a>, <a href="https://www.forex24.com/about-us/legal-documents/privacy-cookies-policy/" target="_blank">Privacy and Cookies Policy</a>, <a href="https://www.forex24.com/about-us/legal-documents/best-interest-order-execution-summary/" target="_blank">Order Execution Policy</a>, <a href="https://www.forex24.com/about-us/legal-documents/general-risk-disclosure/" target="_blank">Risk Disclosure</a>, <a href="https://www.forex24.com/about-us/legal-documents/client-categorisation-policy/" target="_blank">Client Categorisation Policy</a>, <a href="https://www.forex24.com/about-us/legal-documents/conflicts-interest-policy-summary/" target="_blank">Conflicts of Interest Policy</a>, <a href="https://www.forex24.com/about-us/legal-documents/complaints_procedure/" target="_blank">Complaint Handling Procedure</a>, <a href="https://www.forex24.com/about-us/legal-documents/investor-compensation-fund/" target="_blank">Investor Compensation Fund</a>', 'wpml_theme');?>.
                                              </label>
											  <p class="help-block"><?php foreach( $output_msg_array_step as $key => $value ) { echo ($value['item']['element'] == 'terms' && $value['item']['status'] == 'error' ? $value['item']['message'] : ''); }?></p>
                                           </div>
                                        </div>

										<div class="form-group">
											<div class="col-md-12">
	                                        	<button type="submit" class="btn btn-success" name="liveRegistrationBtn"><?php _e('Complete Registration', 'wpml_theme');?></button>
											</div>
	                                    </div>
										
										<div class="row">
											<div class="col-md-12">
												<input type="hidden" id="utm_source" name="utm_source" value="<?php echo $cookie->campaign_source; ?>"/>
												<input type="hidden" id="utm_medium" name="utm_medium" value="<?php echo $cookie->campaign_medium; ?>"/>
												<input type="hidden" id="utm_campaign" name="utm_campaign" value="<?php echo $cookie->campaign_name; ?>"/>
												<input type="hidden" id="utm_campaign_content" name="utm_campaign_content" value="<?php echo $cookie->campaign_content; ?>"/>
												<input type="hidden" id="utm_campaign_term" name="utm_campaign_term" value="<?php echo $cookie->campaign_term; ?>"/>
												<?php if( isset($_GET['btag']) && !empty($_GET['btag']) ) { ?>
													<input type="hidden" id="btag" name="btag" value="<?php echo $_GET['btag']; ?>"/>
												<?php } ?>
											</div>
										</div>

                                    </fieldset>

                            </form>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8 portal-form-element col-md-offset-2">
                            <div class="alert alert-info text-center">
                                <?php _e('<strong>Risk Warning:</strong> Our products are traded on margin and carry a high level of risk and it is possible to lose all your capital.<br>
                            These products may not be suitable for everyone and you should ensure that you understand the risks involved.', 'wpml_theme');?>
                            </div>
                      </div>
                    </div>

        </div>
    </article>

</main>
<?php get_footer(); ?>