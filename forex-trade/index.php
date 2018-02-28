<?php 
	include_once('invest-in-global-markets-header.php');
	$cookie = new GA_Parse($_COOKIE);
?>
	<div class="wrapper">
		
		<section>
			<div class="header-wrapper">
				<div class="container">
					<div class="row">
						
						<div class="col-md-12">
							<nav class="navbar navbar-default navbar-md">
								<div class="container-fluid">
									<!-- Brand and toggle get grouped for better mobile display -->
									<div class="navbar-header">
										<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
											<span class="sr-only">Toggle navigation</span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
											<span class="icon-bar"></span>
										</button>
										<a class="navbar-brand" href="http://www.forex24.com" target="_blank"><img src="images/invest-in-global-markets/sprite_02.png" alt="Forex24"/></a>
									</div>

									<!-- Collect the nav links, forms, and other content for toggling -->
									<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
										
										<ul class="nav navbar-nav navbar-right">
											<li><a href="javascript:$zopim.livechat.window.show();" id="livilyChatLink" class="livilyChatButton ClickdeskChatLink" image="false"><img src="images/invest-in-global-markets/sprite_06.png" alt="" class="menu-icon" /> Live Chat</a>
											</li>
											<li><a href="/contact-us/" target="_blank"><img src="images/invest-in-global-markets/sprite_08.png" alt="" class="menu-icon" /> Call me back</a>
											</li>
										</ul>
									</div>
									<!-- /.navbar-collapse -->
								</div>
								<!-- /.container-fluid -->
							</nav>
						</div><!-- end col-md-12 -->
						
					</div><!-- end row -->
				</div><!-- end container -->
			</div><!-- end header-wrapper -->
		</section><!-- end section -->
		
		<section>
			<div class="form-wrapper">
				<div class="container">
					<div class="row">
						
						
						<div class="col-md-8 col-sm-12">
							<div class="first-line-text">
								Trade CFDs In<br/>
								Global Markets
							</div>
							<div class="second-line-text">
								See the markets<br/>
								you can access
							</div>
							<div class="third-line-text">
								Trade online with<br/>
								a stunning webtrader
							</div>
						</div>
						
						<div class="col-md-4 col-sm-12">
							<div class="form-holder">
								<form class="form-horizontal" id="register" name="register" method="POST" action="">
									<div class="form-group">
										
										<div class="col-sm-12">
											<input type="text" name="firstName" class="form-control first-name-bg" id="firstname" placeholder="First Name">
										</div>
									</div>
									<div class="form-group">
										
										<div class="col-sm-12">
											<input type="text" name="lastName" class="form-control last-name-bg" id="lastname" placeholder="Last Name">
										</div>
									</div>
									<div class="form-group">
										
										<div class="col-sm-12">
											<input type="email" name="email" class="form-control email-bg" id="email" placeholder="Email">
										</div>
									</div>
									<div class="form-group">
										
										<div class="col-sm-12">
											<input type="tel" name="telephone" class="form-control phone-bg" id="phone" placeholder="Phone">
										</div>
									</div>
									<div class="form-group">
										
										<div class="col-sm-12">
											<select title="Country" name="country" id="country" class="form-control country selectpicker">
												<option value="">-Select Country-</option>
		                                        <option value="AT" <?php if( $_POST['country'] && $_POST['country'] == 'AT' ) { echo ' selected'; } ?>>Austria</option>
		                                        <option value="BG" <?php if( $_POST['country'] && $_POST['country'] == 'BG' ) { echo ' selected'; } ?>>Bulgaria</option>
		                                        <option value="HR" <?php if( $_POST['country'] && $_POST['country'] == 'HR' ) { echo ' selected'; } ?>>Croatia</option>
		                                        <option value="CY" <?php if( $_POST['country'] && $_POST['country'] == 'CY' ) { echo ' selected'; } ?>>Cyprus</option>
		                                        <option value="CZ" <?php if( $_POST['country'] && $_POST['country'] == 'CZ' ) { echo ' selected'; } ?>>Czech Republic</option>
		                                        <option value="DK" <?php if( $_POST['country'] && $_POST['country'] == 'DK' ) { echo ' selected'; } ?>>Denmark</option>
		                                        <option value="EE" <?php if( $_POST['country'] && $_POST['country'] == 'EE' ) { echo ' selected'; } ?>>Estonia</option>    
		                                        <option value="FI" <?php if( $_POST['country'] && $_POST['country'] == 'FI' ) { echo ' selected'; } ?>>Finland</option>
		                                        <option value="FR" <?php if( $_POST['country'] && $_POST['country'] == 'FR' ) { echo ' selected'; } ?>>France</option>      
		                                        <option value="DE" <?php if( $_POST['country'] && $_POST['country'] == 'DE' ) { echo ' selected'; } ?>>Germany</option>
		                                        <option value="GR" <?php if( $_POST['country'] && $_POST['country'] == 'GR' ) { echo ' selected'; } ?>>Greece</option>              
		                                        <option value="HU" <?php if( $_POST['country'] && $_POST['country'] == 'HU' ) { echo ' selected'; } ?>>Hungary</option>
		                                        <option value="IS" <?php if( $_POST['country'] && $_POST['country'] == 'IS' ) { echo ' selected'; } ?>>Iceland</option>
		                                        <option value="IE" <?php if( $_POST['country'] && $_POST['country'] == 'IE' ) { echo ' selected'; } ?>>Ireland</option>
		                                        <option value="IT" <?php if( $_POST['country'] && $_POST['country'] == 'IT' ) { echo ' selected'; } ?>>Italy</option>          
		                                        <option value="LV" <?php if( $_POST['country'] && $_POST['country'] == 'LV' ) { echo ' selected'; } ?>>Latvia</option>
		                                        <option value="LI" <?php if( $_POST['country'] && $_POST['country'] == 'LI' ) { echo ' selected'; } ?>>Liechtenstein</option>
		                                        <option value="LT" <?php if( $_POST['country'] && $_POST['country'] == 'LT' ) { echo ' selected'; } ?>>Lithuania</option>
		                                        <option value="LU" <?php if( $_POST['country'] && $_POST['country'] == 'LU' ) { echo ' selected'; } ?>>Luxembourg</option>
		                                        <option value="MT" <?php if( $_POST['country'] && $_POST['country'] == 'MT' ) { echo ' selected'; } ?>>Malta</option>
		                                        <option value="NL" <?php if( $_POST['country'] && $_POST['country'] == 'NL' ) { echo ' selected'; } ?>>Netherlands</option>
		                                        <option value="NO" <?php if( $_POST['country'] && $_POST['country'] == 'NO' ) { echo ' selected'; } ?>>Norway</option>
		                                        <option value="PL" <?php if( $_POST['country'] && $_POST['country'] == 'PL' ) { echo ' selected'; } ?>>Poland</option>
		                                        <option value="PT" <?php if( $_POST['country'] && $_POST['country'] == 'PT' ) { echo ' selected'; } ?>>Portugal</option>
		                                        <option value="RO" <?php if( $_POST['country'] && $_POST['country'] == 'RO' ) { echo ' selected'; } ?>>Romania</option>
		                                        <option value="SK" <?php if( $_POST['country'] && $_POST['country'] == 'SK' ) { echo ' selected'; } ?>>Slovakia</option>
		                                        <option value="SI" <?php if( $_POST['country'] && $_POST['country'] == 'SI' ) { echo ' selected'; } ?>>Slovenia</option>
		                                        <option value="ES" <?php if( $_POST['country'] && $_POST['country'] == 'ES' ) { echo ' selected'; } ?>>Spain</option>
		                                        <option value="SE" <?php if( $_POST['country'] && $_POST['country'] == 'SE' ) { echo ' selected'; } ?>>Sweden</option>
		                                        <option value="GB" <?php if( $_POST['country'] && $_POST['country'] == 'GB' ) { echo ' selected'; } ?>>United Kingdom</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<div class="col-sm-12">
											<input type="checkbox" name="terms-and-conditions" id="terms-and-conditions" value=""/> 
											<span id="i-accept-the-terms-and-conditions-checkbox">I confirm I am over 18 years old and that I have read, understood and accept the</span>
											<a href="<?php echo $terms_link;?>" target="_blank" id="terms-and-conditions-link">General Risk Disclosure</a>
										</div>
									</div>
									
									<div class="form-group">
										<div class="col-sm-12">
											<button type="submit" class="register-now btn btn-block btn-success">REGISTER NOW</button>
										</div>
									</div>
									
									<div class="col-sm-12">
										<input type="hidden" id="querystring" name="querystring" value="<?php echo $_SERVER['QUERY_STRING']; ?>"/>
										<input type="hidden" id="utm_source" name="utm_source" value="<?php echo $cookie->campaign_source; ?>"/>
										<input type="hidden" id="utm_medium" name="utm_medium" value="<?php echo $cookie->campaign_medium; ?>"/>
										<input type="hidden" id="utm_campaign" name="utm_campaign" value="<?php echo $cookie->campaign_name; ?>"/>
										<input type="hidden" id="utm_campaign_content" name="utm_campaign_content" value="<?php echo $cookie->campaign_content; ?>"/>
										<input type="hidden" id="utm_campaign_term" name="utm_campaign_term" value="<?php echo $cookie->campaign_term; ?>"/>
										<?php if( isset($_GET['btag']) && !empty($_GET['btag']) ) { ?>
											<input type="hidden" id="btag" name="btag" value="<?php echo $_GET['btag']; ?>"/>
										<?php } ?>
									</div>
					
									<div class="form-group form-info">
										<div class="col-sm-12">
											<p>Trading involves significant risk of loss.</p>
										</div>
									</div>
								</form>
							</div><!-- form-holder -->
							<div id="chevron"></div><!-- end form-end -->
						</div><!-- end col-md-4 -->
						
						
						
					</div><!-- end row -->
				</div><!-- end container -->
			</div><!-- end form-wrapper -->
		</section><!-- end section -->
		
		<section>
			<div class="main-wrapper">
				<div class="container">
					<div class="row">
						
						<!-- <div class="col-md-12"> -->
						
						<div class="main-content">
							<h1>How forex24 works</h1>
							<hr>
							<p class="main-text">USING WALLTER IS AS SIMPLE AS 1, 2, 3.<br>Make and receive payments anytime and anywhere.</p>
							
							<div class="row">
								<div class="col-md-4">
									<div class="main-box  main-box--register">
										<img src="images/invest-in-global-markets/register.svg" width="99" alt="Register">
										<b>Register your account</b>
										<p>Joining Wallter is hassle free.<br>You’ll be ready to go in<br>minutes.</p>
									</div>
								</div>
								
								<div class="col-md-4">
									<div class="main-box  main-box--fund">
										<img src="images/invest-in-global-markets/fund.svg" width="99" alt="Register">
										<b>Fund It</b>
										<p>Choose whichever currency<br>and funding method is<br>convenient for you.</p>
									</div>
								</div>
								
								<div class="col-md-4">
									<div class="main-box  main-box--trade">
										<img src="images/invest-in-global-markets/trade.svg" width="99" alt="Register">
										<b>Trade</b>
										<p>You’re all set. Trade online<br>knowing that it’s safe<br>with us.</p>
									</div>
								</div>
							</div>
							
						</div><!-- end main-content -->
						
						<!-- </div> end col-md-12 -->
						
					</div><!-- end row -->
				</div><!-- end container -->
			</div><!-- end main-wrapper -->
		</section><!-- end section -->
		
		<section>
			<div class="advantage-wrapper">
				<div class="container">
					<div class="row">
						
						<div class="col-xs-6 col-sm-3 col-md-3">
							<div class="advantage">
								<div class="advantage-icon">
									<img src="images/invest-in-global-markets/adv-icon-1.png" alt="Icon 1" />
								</div><!-- end advantage-icon -->
								<div class="advantage-title">
									<h2>Reliable<br /> platform</h2>
								</div><!-- end advantage-title -->
							</div><!-- end advantage -->
						</div><!-- end col-md-3 -->
						<div class="col-xs-6 col-sm-3 col-md-3">
							<div class="advantage">
								<div class="advantage-icon">
									<img src="images/invest-in-global-markets/adv-icon-2.png" alt="Icon 2" />
								</div><!-- end advantage-icon -->
								<div class="advantage-title">
									<h2>24/7<br />Support</h2>
								</div><!-- end advantage-title -->
							</div><!-- end advantage -->
						</div><!-- end col-md-3 -->
						<div class="col-xs-6 col-sm-3 col-md-3">
							<div class="advantage">
								<div class="advantage-icon">
									<img src="images/invest-in-global-markets/adv-icon-3.png" alt="Icon 3" />
								</div><!-- end advantage-icon -->
								<div class="advantage-title">
									<h2>Advanced<br />encryption tools</h2>
								</div><!-- end advantage-title -->
							</div><!-- end advantage -->
						</div><!-- end col-md-3 -->
						<div class="col-xs-6 col-sm-3 col-md-3">
							<div class="advantage">
								<div class="advantage-icon">
									<img src="images/invest-in-global-markets/adv-icon-4.png" alt="Icon 4" />
								</div><!-- end advantage-icon -->
								<div class="advantage-title">
									<h2>Web, Mobile<br />Desktop</h2>
								</div><!-- end advantage-title -->
							</div><!-- end advantage -->
						</div><!-- end col-md-3 -->
						
					</div><!-- end row -->
				</div><!-- end container -->
			</div><!-- end advantage-wrapper -->
		</section><!-- end section -->
		
		<section>
			<div class="footer-wrapper">
				<div class="container">
					<div class="row row-centered">
						
						<div class="col-sm-2 col-md-2 col-centered">
							<div class="footer-regulation">
								<img src="images/invest-in-global-markets/sprite_55.png" alt="esma" />
							</div><!-- end footer-logo -->
						</div>
						<div class="col-sm-2 col-md-2 col-centered">
							<div class="footer-regulation">
								<img src="images/invest-in-global-markets/sprite_58.png" alt="CySEC" />
							</div><!-- end footer-logo -->
						</div>
						<div class="col-sm-2 col-md-2 col-centered">
							<div class="footer-regulation">
								<img src="images/invest-in-global-markets/sprite_60.png" alt="MiFID" />
							</div><!-- end footer-logo -->
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section>
			<div class="footer-logos-wrapper">
				<div class="container">
					<div class="row">
						
						<div class="footer-logos">
						
							<div class="col-sm-6 col-md-6">
								<div class="row">
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/2.png" alt="Visa" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/6.png" alt="Mastercard" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-3 col-sm-3 col-md-3">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/4.png" alt="Maestro" />
										</div><!-- end footer-logo -->
									</div>
									
								</div>
							</div>
							
							<div class="col-sm-6 col-md-6">
								  <div class="row">
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo last">
											<img src="images/invest-in-global-markets/17.png" alt="giropay" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/18.png" alt="Sofort" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/10.png" alt="CashU" />
										</div><!-- end footer-logo -->
									</div>
									
								</div>      
							</div>
							
							<div class="col-sm-6 col-md-6">
								<div class="row">
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/19.png" alt="PayPal" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo last">
											<img src="images/invest-in-global-markets/20.png" alt="Bank Transfer" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/21.png" alt="Neteller" />
										</div><!-- end footer-logo -->
									</div>
									
								</div>
							</div>
							
							<div class="col-sm-6 col-md-6">
								<div class="row">
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/22.png" alt="Skrill" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/23.png" alt="WebMoney" />
										</div><!-- end footer-logo -->
									</div>
									<div class="col-xs-4 col-sm-4 col-md-4">
										<div class="footer-logo">
											<img src="images/invest-in-global-markets/24.png" alt="TrustPay" />
										</div><!-- end footer-logo -->
									</div>
								</div>
							</div>
							
						
						</div><!-- end footer-logos -->
						
					</div><!-- end row -->
				</div><!-- end container -->
			</div><!-- end footer-logos-wrapper -->
		</section><!-- end section -->
		
		<section>
			<div class="footer-wrapper">
				<div class="container">
					<div class="row">
						
						<div class="col-md-12">
							
							<div class="footer">
								<p><strong>Company Information:</strong> The domain www.forex24.com is operated by Lydya Financial Ltd, a Cyprus Investment Firm, authorized and regulated by the Cyprus Securities and Exchange Commission with CIF license number 300/16. Lydya Financial Ltd is located at 155 Ayias Fylaxeos, Ersi Court Suite 202, 3083 Limassol, Cyprus.<br/><br/><strong>General Risk Warning:</strong> CFDs are leveraged products. Trading in CFDs related to foreign exchange, commodities, financial indices, equities and other underlying asset, carry a high level of risk and can result in the loss of all of your investment. As such, CFDs may not be suitable for all investors. You should not invest money that you cannot afford to lose. Before deciding to trade, you should become aware of all the risks associated with CFD trading and seek advice from an independent and suitably licensed financial advisor. Under no circumstances shall we have any liability to any person or entity for (a) any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs or (b) any direct, indirect, special, consequential or incidental damages whatsoever.For more information about the risks associated with trading CFDs please read our <a href="https://www.forex24.com/about-us/legal-documents/general-risk-disclosure/" target="_blank">"Full Risk Disclosure Statement"</a>.</p>
							</div>
							<div class="footer-copyright">
								<p>Copyright &copy; <?php echo date('Y');?>. All Rights Reserved</p>
							</div>
							
						</div><!-- end col-md-12 -->
						
					</div><!-- end row -->
				</div><!-- end container -->
			</div><!-- end footer-wrapper -->
		</section><!-- end section -->
		
	</div><!-- end wrapper -->

</body>
</html>