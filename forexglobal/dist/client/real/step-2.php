<?php
  session_start();
  echo session_id();
  if (isset($_SESSION['token']) && isset($_GET['token'])) :
    if ($_SESSION['token'] == $_GET['token']) :
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="description" content="Forex24 is a European CySEC Regulated online broker providing contracts for difference on foreign exchange, shares, futures and precious metals primarily to retail clients.">
  <title>Register Real Step 2 - Forex24 Global</title>
  <link rel="stylesheet" href="../../css/style.min.css">
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="../../img/favicon/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="../../apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../../img/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="194x194" href="../../img/favicon/favicon-194x194.png">
  <link rel="icon" type="image/png" sizes="192x192" href="../../img/favicon/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../../img/favicon/favicon-16x16.png">
  <link rel="mask-icon" href="../../img/favicon/safari-pinned-tab.svg" color="#2f2861">
  <link rel="manifest" href="../../site.webmanifest">
  <meta name="msapplication-config" content="../../browserconfig.xml">
  <meta name="msapplication-TileImage" content="../../img/favicon/mstile-144x144.png">
  <meta name="theme-color" content="#2f2861">
</head>
<body>
  <header class="header--inner  header--scroll">
    <div class="header__container">
      <div class="header__flex">
        <a class="header__logo" href="../../index.html">
          <img src="../../img/logo.svg" alt="Forex24 Global">
        </a>
        <button class="header__toggle">Open Menu</button>
        <ul class="header__user  header__user--closed">
          <li>
            <a class="header__open" href="#">Open account</a>
            <ul class="header__accounts  header__accounts--closed">
              <li><a>Real</a></li>
              <li><a href="../../client/demo.html">Demo</a></li>
              <li><a href="../../trading/platforms/zulutrade.html">ZuluTrade</a></li>
            </ul>
          </li>
          <li><a href="../login.html">Log in</a></li>
          <li>
            <select class="header__language">
              <option>En</option>
              <option>Ru</option>
            </select>
          </li>
        </ul>
      </div>
      <nav class="nav  nav--closed">
        <ul class="nav__list">
          <li>
            <a class="nav__link" onclick="about()">About</a>
            <div class="nav__wrapper  nav__wrapper--closed">
              <ul class="nav__sub">
                <li><a href="../../about-us/licenses-and-regulations.html">Licenses and Regulations</a></li>
                <li><a href="../../about-us/security-of-funds.html">Security of Funds</a></li>
                <li><a href="../../about-us/stp-broker.html">STP Broker</a></li>
                <li><a href="../../about-us/legal-documents.html">Legal Documents</a></li>
                <li><a href="../../about-us/kids.html">KIDs</a></li>
                <li><a href="../../about-us/careers.html">Careers</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a class="nav__link" onclick="trading()">Trading</a>
            <div class="nav__wrapper  nav__wrapper--closed">
              <ul class="nav__sub">
                <li><a href="../../trading/account-types.html">Account Types</a></li>
                <li><a href="../../trading/account-comparison.html">Account Comparison</a></li>
                <li><a href="../../trading/product-specification.html">Product Specification</a></li>
                <!-- <li><a href="../../trading/trading-specification.html">Trading Specification</a></li> -->
                <li><a href="../../trading/platforms.html">Platforms</a></li>
                <li><a href="../../trading/funding-and-withdrawal.html">Funding and Withdrawal</a></li>
                <li><a href="../../trading/announcements.html">Announcements</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a class="nav__link" onclick="resources()">Resources</a>
            <div class="nav__wrapper  nav__wrapper--closed">
              <ul class="nav__sub">
                <li><a href="../../resources/glossary.html">Glossary</a></li>
                <li><a href="../../resources/economic-calendar.html">Economic calendar</a></li>
              </ul>
            </div>
          </li>
          <li><a href="https://partners.forex24.com/" target="_blank">Partners</a></li>
          <li>
            <a class="nav__link" onclick="contact()">Contact Us</a>
            <div class="nav__wrapper  nav__wrapper--closed">
              <ul class="nav__sub">
                <li><a href="../../contact-us.html">Contact Us</a></li>
                <li><a href="../../faq.html">FAQ</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <label class="nav__search">
          <input type="search">
        </label>
      </nav>
    </div>
  </header>
  <section class="client">
    <div class="container">
      <?php
        if (isset($_SESSION['Leverage'])) {
          echo($_SESSION['Leverage']);
        }
      ?>
      <h1 class="client__name">Register Real</h1>
      <h2 class="client__subname">1. Personal Details</h2>
      <form class="client__form" action="../verification/step2_handler.php?token=<?php echo $_SESSION['token']; ?>" method="post">
        <div class="client__flex">
          <input type="date" max="<?php $year = intval(date('Y')) - 18; echo $year; echo date("-m-d");?>" name="Date of Birth" required>
          <input type="text" name="address1" placeholder="Address" required>
        </div>
        <div class="client__flex">
          <input type="text" name="city" placeholder="City/Town">
          <input type="text" name="postCode" placeholder="Post Code">
        </div>
        <b class="client__question">Are you a U.S. citizen or U.S. Resident for tax purposes?</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            Yes
            <input type="radio" name="us_taxpayer" value="true">
          </label>
          <label class="client__label">
            No
            <input type="radio" name="us_taxpayer" value="false">
          </label>
        </div>
        <b class="client__question">Provide us with your Taxpayer Identification Number ("TIN")</b>
        <div class="client__flex  client__flex--center">
          <input type="text" name="tin" placeholder="TIN">
        </div>
        <b class="client__question">Are you a <a href="../../img/pdf/Politically-Exposed-Person-Definition.pdf" target="_blank">Politically Exposed Person</a> (PEP)?</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            Yes
            <input type="radio" name="pep" value="true">
          </label>
          <label class="client__label">
            No
            <input type="radio" name="pep" value="false">
          </label>
        </div>
        <div class="client__flex">
          <select name="education" tabindex="0" required>
            <option hidden>Education</option>
            <option value="secondary">Secondary</option>
            <option value="high School">High School</option>
            <option value="bachelor`s Degree">Bachelor`s Degree</option>
            <option value="master`s Degree">Master`s Degree</option>
            <option value="doctorate">Doctorate</option>
            <option value="professional">Professional</option>
          </select>
          <select name="employment" tabindex="0" required>
            <option hidden>Employment</option>
            <option value="employed">Employed</option>
            <option value="self-Employed">Self-Employed</option>
            <option value="retired">Retired</option>
            <option value="student">Student</option>
            <option value="unemployed">Unemployed</option>
          </select>
        </div>
        <hr class="client__hr">
        <h2 class="client__subname">2. Investor Information</h2>
        <div class="client__flex">
          <select name="annualincome" tabindex="0" required>
            <option hidden>Annual Income (in EUR)</option>
            <option value="0 - 15.000">0 - 15.000</option>
            <option value="15.001 - 30.000">15.001 - 30.000</option>
            <option value="50.001 - 100.000">50.001 - 100.000</option>
            <option value="100.001 - 500.000">100.001 - 500.000</option>
            <option value="500.001 - 1.000.000">500.001 - 1.000.000</option>
            <option value="> 1.000.000">> 1.000.000</option>
          </select>
          <select name="sourceofincome" tabindex="0" required>
            <option hidden>Source of Income</option>
            <option value="salary">Salary</option>
            <option value="savings/investments">Savings/Investments</option>
            <option value="partner/parent/family">Partner/Parent/Family</option>
            <option value="benefits/borrowing">Benefits/Borrowing</option>
            <option value="pension">Pension</option>
            <option value="inheritance">Inheritance</option>
            <option value="real estate">Real Estate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="client__flex">
          <select name="estimatenetworth" tabindex="0" required>
            <option hidden>Estimated Net Worth (in EUR)</option>
            <option value="0 - 50.000">0 - 50.000</option>
            <option value="50.001 - 250.000">50.001 - 250.000</option>
            <option value="250.001 - 500.000">250.001 - 500.000</option>
            <option value="500.001 - 1.000.000">500.001 - 1.000.000</option>
            <option value="> 1.000.000">&gt; 1.000.000</option>
          </select>
          <select name="purposeofopeningtradingaccount" tabindex="0" required>
            <option hidden>Purpose of Opening a Trading Account</option>
            <option value="speculation">Speculation</option>
            <option value="hedging">Hedging</option>
            <option value="investment">Investment</option>
            <option value="diversification">Diversification</option>
          </select>
        </div>
        <div class="client__flex">
          <select name="anticipatedamounttospendwithusforthenexttwelvemonths" tabindex="0" required>
            <option hidden>Anticipated amount available to trade with us within then next 12 months (in EUR)</option>
            <option value="up to 10.000">Up to 10.000</option>
            <option value="10.001 - 50.000">10.001 - 50.000</option>
            <option value="50.001 - 100.000">50.001 - 100.000</option>
            <option value="> 100.000">&gt; 100.000</option>
          </select>
        </div>
        <hr class="client__hr">
        <h2 class="client__subname">3. Appropriateness</h2>
        <p class="client__warning">
          <b>Attention</b>
          Please note that your responses to the following questions will determin the maximum leverage of your trading account.
        </p>
        <h3 class="client__subsubname">Experience</h3>
        <b class="client__question">Do you have any experience or qualifications which would help you to understand trading in leveraged products?</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            Yes
            <input type="radio" name="experience" class='experience-quiz' data-val="0" value="1">
          </label>
          <label class="client__label">
            No
            <input type="radio" name="experience" class='experience-quiz' data-val="5" value="0">
          </label>
        </div>
        <b class="client__question">Which of the following financial products have you traded in the last 3 years?</b>
        <div class="client__flex  client__flex--center  client__flex--column">
          <label class="client__label">
            CFD's (Forex, Metals, Commodities)
            <input class="client__checkbox" type="checkbox" name="traded_cfds">
            <div class="client__flex  client__flex--hide  client__flex--center">
              <select class="client__select" name="traded_cfds_frequency" tabindex="0" required>
                <option hidden>Frequency of transactions</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <select class="client__select" name="traded_cfds_volume" tabindex="0" required>
                <option hidden>Average volume size per transaction (USD)</option>
                <option value="Less than $10,000">Less than $10,000</option>
                <option value="$10,000 – $20,000">$10,000 – $20,000</option>
                <option value="$20,000 – $30,000">$20,000 – $30,000</option>
                <option value="$30,000 – $40,000">$30,000 – $40,000</option>
                <option value="$40,000 – $50,000">$40,000 – $50,000</option>
                <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                <option value="$100,000 – $150,000">$100,000 – $150,000</option>
                <option value="$150,000 – $200,000">$150,000 – $200,000</option>
                <option value="$200,000 – $250,000">$200,000 – $250,000</option>
                <option value="$250,000 or more">$250,000 or more</option>
              </select>
            </div>
          </label>
          <label class="client__label">
            Other Derivatives (Swaps, Futures, Options)
            <input class="client__checkbox" type="checkbox" name="traded_other_derivatives">
            <div class="client__flex  client__flex--hide  client__flex--center">
              <select class="client__select" name="traded_other_derivatives_frequency" tabindex="0" required>
                <option hidden>Frequency of transactions</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <select class="client__select" name="traded_other_derivatives_volume" tabindex="0" required>
                <option hidden>Average volume size per transaction (USD)</option>
                <option value="Less than $10,000">Less than $10,000</option>
                <option value="$10,000 – $20,000">$10,000 – $20,000</option>
                <option value="$20,000 – $30,000">$20,000 – $30,000</option>
                <option value="$30,000 – $40,000">$30,000 – $40,000</option>
                <option value="$40,000 – $50,000">$40,000 – $50,000</option>
                <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                <option value="$100,000 – $150,000">$100,000 – $150,000</option>
                <option value="$150,000 – $200,000">$150,000 – $200,000</option>
                <option value="$200,000 – $250,000">$200,000 – $250,000</option>
                <option value="$250,000 or more">$250,000 or more</option>
              </select>
            </div>
          </label>
          <label class="client__label">
            Shares/Bonds
            <input class="client__checkbox" type="checkbox" name="shares_bonds">
            <div class="client__flex  client__flex--hide  client__flex--center">
              <select class="client__select" name="shares_bonds_frequency" tabindex="0" required>
                <option hidden>Frequency of transactions</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <select class="client__select" name="shares_bonds_volume" tabindex="0" required>
                <option hidden>Average volume size per transaction (USD)</option>
                <option value="Less than $10,000">Less than $10,000</option>
                <option value="$10,000 – $20,000">$10,000 – $20,000</option>
                <option value="$20,000 – $30,000">$20,000 – $30,000</option>
                <option value="$30,000 – $40,000">$30,000 – $40,000</option>
                <option value="$40,000 – $50,000">$40,000 – $50,000</option>
                <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                <option value="$100,000 – $150,000">$100,000 – $150,000</option>
                <option value="$150,000 – $200,000">$150,000 – $200,000</option>
                <option value="$200,000 – $250,000">$200,000 – $250,000</option>
                <option value="$250,000 or more">$250,000 or more</option>
              </select>
            </div>
          </label>
        </div>
        <!-- <div class="client__flex  client__flex--center">
          <select name="Frequency of transactions" tabindex="0" required>
            <option hidden>Frequency of transactions</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div> -->
        <!-- <div class="client__flex  client__flex--center">
          <select name="Average volume size per transaction (USD)" tabindex="0" required>
            <option hidden>Average volume size per transaction (USD)</option>
            <option value="Less than $10,000">Less than $10,000</option>
            <option value="$10,000 – $20,000">$10,000 – $20,000</option>
            <option value="$20,000 – $30,000">$20,000 – $30,000</option>
            <option value="$30,000 – $40,000">$30,000 – $40,000</option>
            <option value="$40,000 – $50,000">$40,000 – $50,000</option>
            <option value="$50,000 – $100,000">$50,000 – $100,000</option>
            <option value="$100,000 – $150,000">$100,000 – $150,000</option>
            <option value="$150,000 – $200,000">$150,000 – $200,000</option>
            <option value="$200,000 – $250,000">$200,000 – $250,000</option>
            <option value="$250,000 or more">$250,000 or more</option>
          </select>
        </div> -->
        <b class="client__question">Have you attended a course or seminar on CFDs or Forex?</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            Yes
            <input type="radio" name="attended_course_or_seminar_on_cfds_or_forex" class='experience-quiz' data-val="0" value="1">
          </label>
          <label class="client__label">
            No
            <input type="radio" name="attended_course_or_seminar_on_cfds_or_forex" class='experience-quiz' data-val="3" value="0">
          </label>
        </div>
        <b class="client__question">Have you ever been employed as a Professional in a Financial Institution and/or been in employment involved in Trading of Financial Instruments?</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            Yes
            <input type="radio" name="employed_as_a_professional_in_financial_institution" class='experience-quiz' data-val="0" value="1">
          </label>
          <label class="client__label">
            No
            <input type="radio" name="employed_as_a_professional_in_financial_institution" class='experience-quiz' data-val="1" value="0">
          </label>
        </div>
        <h3 class="client__subsubname">Trading Quiz</h3>
        <b class="client__question">Trading with a higher leverage in CFDs means you will open a trade of a larger volume, thus increasing the risk of loss.</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            True
            <input type="radio" name="trading_with_higher_leverage" class='experience-quiz' data-val="0" value="1">
          </label>
          <label class="client__label">
            False
            <input type="radio" name="trading_with_higher_leverage" class='experience-quiz' data-val="2" value="0">
          </label>
        </div>
        <b class="client__question">The market is moving against your position. Your CFD position will close automatically if your equity reaches the Stop out Level.</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            True
            <input type="radio" name="the_market_is_moving_against_your_position" class='experience-quiz' data-val="0" value="1">
          </label>
          <label class="client__label">
            False
            <input type="radio" name="the_market_is_moving_against_your_position" class='experience-quiz' data-val="2" value="0">
          </label>
        </div>
        <b class="client__question">If the value of your initial position in a CFD contract is $10,000 and the leverage ratio is 1:50, then the initial margin requirement would be 4% (i.e. $400)</b>
        <div class="client__flex  client__flex--center">
          <label class="client__label">
            True
            <input type="radio" name="value_of_your_initial_position_in_a_cfd_contract" class='experience-quiz' data-val="2" value="1">
          </label>
          <label class="client__label">
            False
            <input type="radio" name="value_of_your_initial_position_in_a_cfd_contract" class='experience-quiz' data-val="0" value="0">
          </label>
        </div>
        <hr class="client__hr">
        <h2 class="client__subname">4. Trading Account</h2>
        <div class="client__flex">
          <select class="client__hidden" name="tradingplatform" tabindex="0" required>
            <option hidden>Trading Platform</option>
            <option value="MT4">MT4</option>
            <option class="client__zulu" value="ZuluTrade">ZuluTrade</option>
          </select>
          <select name="accounttype" tabindex="0" required>
            <option hidden>Account Type</option>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <!--<option value="zulutrade">ZuluTrade</option>-->
            <option value="gold">Gold</option>
            <!--<option value="swap free">Swap Free</option>-->
          </select>
        </div>
        <div class="client__flex  client__flex--column  client__flex--desc">
          <div class="client__info">
            <b>Letter of Direction Form (LOD)</b>
            <p>The undersigned (hereinafter the “Client”) hereby grants permission to link his/her Lydya Financial Ltd (with brand name: Forex24) trading account with Triple A Experts S.A. and use the services provided by Triple A Experts S.A., (hereby called ‘ZuluTrade’), pursuant to the Limited Power of Attorney granted by the Client to Triple A Experts S.A. whereby the Client authorizes Triple A to manage his/her account with Lydya Financial Ltd (“Managed Account”) as per the provisions of the Limited Power of Attorney.</p>
            <p>The Client agrees to the following conditions:</p>
            <p>1. That Lydya Financial Ltd has made no representation regarding the potential profitability of the ZuluTrade service.</p>
            <p>2. That client is fully aware of the risk involved in trading in the foreign exchange market, and that Lydya Financial Ltd holds no liability for any losses to client’s account caused by mechanical, software, communication failure, system error or any other causes beyond its immediate control.</p>
            <p>3. That Lydya Financial Ltd shall execute the signals generated by the Zulu Trade as delivered to Lydya Financial Ltd and that Lydya Financial Ltd takes no responsibility for advising the client of any changes, alterations, enhancements or optimizations made by ZuluTrade.</p>
            <p>4. That Triple A is not permitted to make a deposit or withdrawal of funds into or from the client’s account. Only the owner of the trading account has the right to deposit and withdraw funds from the trading account.</p>
            <p>5. That the client gives consent to Lydya Financial Ltd to increase the spreads by one pip for every round turn transaction executed in any account traded with Lydya Financial Ltd that subscribes to ZuluTrade. The increase in spreads is a Software Transmission Fee (STF) charged for as long as the undersigned client is using the ZuluTrade services.</p>
            <p>6. That this LOD shall remain valid until revoked in writing by the client. This LOD shall not expire upon the death, bankruptcy or the loss of legal capacity of the client.</p>
            <b>LIMITATION OF LIABILITY</b>
            <p>You understand that in no event will Lydya Financial Ltd or its officers, directors, shareholders, parents, subsidiaries, affiliates, employees, agents, licensors or any data provider be liable for any consequential, punitive, incidental, special or indirect damages, loss of business revenue or lost profits arising as result of your use of the Managed Account or through the acts or omissions of the account manager, whether in an action under contract, negligence or any other theory, even if Lydya Financial Ltd is advised of the possibility of such.</p>
            <b>INDEMNIFICATION</b>
            <p>By signing you are hereby agree to indemnify, defend and hold harmless Lydya Financial Ltd and its officers, directors, shareholders, parents, subsidiaries, affiliates, employees, plan sponsors, consultants, agents and licensors from and against any and all third-party claims, liability, damages and/or costs (including, but not limited to, reasonable attorneys’ fees) arising from your use of a ZuluTrade account, including without limitation, any failure to comply with the terms and conditions of Lydya Financial Ltd websites, or other right of a third party, or from a violation of applicable law.</p>
            <p>By signing below, I acknowledge that I have received and read the above information pertaining to the ZuluTrade service and agree to the terms and conditions set forth herein. I hereby confirm that I understand the risks embodied in foreign exchange trading, including those risks particular to foreign exchange trade via copy trading and I hereby agree to indemnify and hold Lydya Financial Ltd harmless from, and against any and all liabilities, losses, damages, costs and expenses including attorney's fees, arising therefrom.</p>
            <p>I further acknowledge and agree that Lydya Financial Ltd shall execute the signals sent by ZuluTrade as delivered to my Forex24 Trading Account, and Lydya Financial Ltd shall have no liability and responsibility for any losses to my Forex24 Trading Account(s) for any reasons including but not limited to bad strategy, mechanical error, software error or system error.</p>
          </div>
          <label class="client__label">
            <input class="client__checkbox" type="checkbox" name="">
            *I/we hereby acknowledge that I/we have read and consent to the statements listed above. I/we hereby agree that I/we understand and certify that I/we have the financial resources to enter into this agreement and that all trading objectives have been explained. I/we acknowledge having received, read and understood the foregoing letter of direction, limited power-of-attorney, service authorisation, and incorporated risk disclosures.
          </label>
        </div>
        <div class="client__flex">
          <select name="currency" tabindex="0" required>
            <option hidden>Currency</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <select id="leverage" name="leverage" tabindex="0" required>
            <option hidden>Leverage</option>
              <?php if ($_SESSION['first_step']['Country'] == 'MT' || $_SESSION['Leverage'] == 'Your leverage is only 1:50'): ?>
                <option value="1:50">1:50</option>
              <?php elseif($_SESSION['first_step']['Country'] == 'PL'): ?>
                <option value="1:100">1:100</option>
              <?php else: ?>
                <option value="1:10">1:10</option>
                <option value="1:30">1:30</option>
                <option value="1:50">1:50</option>
                <option value="1:100">1:100</option>
                <option value="1:200">1:200</option>
                <option value="1:400">1:400</option>
              <?php endif; ?>
          </select>
        </div>
        <!--
          
            
          -->
        <hr class="client__hr">
        <h2 class="client__subname">5. Client Area Credentials</h2>
        <div class="client__flex">
          <input type="password" name="Password" placeholder="Password" required>
          <input type="password" name="Confirm Password" placeholder="Confirm Password" required>
        </div>
        <div class="client__flex">
          <input type="hidden">
          <button class="client__next" type="submit" name="Next Step">Next Step</button>
        </div>
      </form>
      <p class="client__warning">
        <b>Risk Warning:</b>
        Our products are traded on margin and carry a high level of risk and it is possible to lose all your capital. These products may not be suitable for everyone and you should ensure that you understand the risks involved.
      </p>
    </div>
  </section>
  <section class="payment  payment--inner">
    <div class="container">
      <div class="payment__flex">
        <div class="payment__box  payment__box--mc"></div>
        <div class="payment__box  payment__box--visa"></div>
        <div class="payment__box  payment__box--bank"></div>
        <div class="payment__box  payment__box--skrill"></div>
        <div class="payment__box  payment__box--neteller"></div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="footer__flex">
        <ul class="footer__ul">
          <li>
            <img class="footer__logo" src="../../img/logo-w.svg" alt="Forex24 Global">
          </li>
          <li>
            <!-- <a class="footer__callme" href="tel:+442080891644">Call us</a> -->
          </li>
          <li class="footer__social">
            <a class="footer__link  footer__link--fb" href="https://www.facebook.com/forex24com/" target="_blank"></a>
            <a class="footer__link  footer__link--li" href="https://www.linkedin.com/in/forex24com/" target="_blank"></a>
            <a class="footer__link  footer__link--gp" href="#"></a>
            <a class="footer__link  footer__link--tw" href="https://twitter.com/forex24com/" target="_blank"></a>
          </li>
        </ul>
        <ul class="footer__ul  footer__ul--links">
          <li><b>About</b></li>
          <li><hr></li>
          <li><a href="../../about-us/licenses-and-regulations.html">Licenses & Regulations</a></li>
          <li><a href="../../about-us/security-of-funds.html">Security Of Funds</a></li>
          <li><a href="../../about-us/stp-broker.html">STP Broker</a></li>
          <li><a href="../../about-us/legal-documents.html">Legal Documents</a></li>
          <li><a href="../../about-us/kids.html">KIDs</a></li>
          <li><a href="../../about-us/careers.html">Careers</a></li>
        </ul>
        <ul class="footer__ul  footer__ul--links">
          <li><b>Trading</b></li>
          <li><hr></li>
          <li><a href="../../trading/account-types.html">Account Types</a></li>
          <li><a href="../../trading/account-comparison.html">Account Comparison</a></li>
          <li><a href="../../trading/product-specification.html">Product Spesification</a></li>
          <li><a href="../../trading/trading-specification.html">Trading Spesification</a></li>
          <li><a href="../../trading/platforms.html">Platforms</a></li>
          <li><a href="../../trading/funding-and-withdrawal.html">Funding and Withdrawal</a></li>
          <li><a href="../../trading/announcements.html">Announcements</a></li>
        </ul>
        <ul class="footer__ul  footer__ul--links">
          <li><b>Resources</b></li>
          <li><hr></li>
          <li><a href="../../resources/glossary.html">Glossary</a></li>
          <li><a href="../../resources/economic-calendar.html">Economic calendar</a></li>
        </ul>
        <ul class="footer__ul  footer__ul--links">
          <li><b>Contacts</b></li>
          <li><hr></li>
          <li>Customer Service<br>CY Number: <a href="tel:+35725000199">+35725000199</a></li><br>
          <li>Support<br>UK Number: <a href="tel:+442080891644">+442080891644</a><br><a href="mailto:support@forex24.com">support@forex24.com</a></li>
        </ul>
      </div>
        <hr class="footer__hr">
      <b class="footer__name">Risk warning:</b>
      <p class="footer__text">Trading in Contracts for Difference (‘CFDs’) carries a high level of risk and can result in the loss of all your investment. As such, CFDs may not be appropriate for all investors. You should not invest money that you cannot afford to lose. Before deciding to trade, you should become aware of all the risks associated with CFD trading, and seek advice from an independent and suitably licensed financial advisor. Under no circumstances shall we have any liability to any person or entity for (a) any loss or damage in whole or part caused by, resulting from, or relating to any transactions related to CFDs or (b) any direct, indirect, special, consequential or incidental damages whatsoever. For more information about the risks associated with trading CFDs please find and read our <a href="../img/pdf/Risk-Disclosure-Warning-Notice-1.0.1-2.pdf" target="_blank">‘General Risk Disclosure’</a>.</p>
      <p class="footer__text">Forex24 Global does not provide services to residents of the USA, Canada, Japan, North Korea, Iran, Belgium and some other regions.</p>
        <hr class="footer__hr">
      <p class="footer__text">© 2018 All rights reserved LYDYA FINANCIAL LTD.</p>
      <p class="footer__text">Located at 155 Ayias Fylaxeos, Ersi Court Suite 202, 3083 Limassol, Cyprus.</p>
      <p class="footer__text">Forex24 Global is a brand owned and operated by Lydya Financial Ltd, a Cyprus Investment Firm (CIF) regulated and supervised by the Cyprus Securities and Exchange Commission (CySEC) with CIF <a href="https://www.cysec.gov.cy/en-GB/entities/investment-firms/cypriot/79086/" target="_blank">Licence number 300/16</a> and Company registration number HE334292.</p>
      <p class="footer__text">The Company is also cliented with: FCA in UK with reg. no. 782501; BaFin in Germany with reg. no. 1349943; CONSOB in Italy with reg. no. 4624; ACP in France with reg. no. 75980; CNMV in Spain with reg. no. 4373.</p>
    </div>
  </footer>
  <script
    src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous">
  </script>
   <script src="../../js/score_count42.js" async></script>
   <script src="../../js/jquery-plugin.js"></script>
</body>
</html>

<?php
    else:
?>

You don't have permssions

<?php
    endif;
  else:
?>

You don't have permssions

<?php
  endif;
?>

<script type="text/javascript">
  var country = "<?php echo $_SESSION['first_step']['Country']; ?>";
</script>