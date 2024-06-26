<?php
  session_start();
  if (isset($_SESSION['token']) && isset($_GET['token'])) :
    if ($_SESSION['token'] == $_GET['token']) :
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="description" content="Forex24 is a European CySEC Regulated online broker providing contracts for difference on foreign exchange, shares, futures and precious metals primarily to retail clients.">
  <title>Register Real Step 3 - Forex24 Global</title>
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
              <li><a href="../../register/demo.html">Demo</a></li>
              <li><a href="../../trading/platforms/zulutrade.html">ZuluTrade</a></li>
            </ul>
          </li>
          <li><a href="https://client.forex24.com/en/members/login">Log in</a></li>
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
                <li><a href="../../trading/trading-specification.html">Trading Specification</a></li>
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
  <section class="register">
    <div class="container">
      <h1 class="register__name">Register Real</h1>
      <h2 class="register__subsubname">Communication</h2>
      <form class="register__form" action="../verification/step3_handler.php?token=<?php echo $_SESSION['token']; ?>" method="POST">
        <b class="register__question">I wish to receive newsletters and other communication material:</b>
        <div class="register__flex  register__flex--center">
          <label class="register__label">
            Yes
            <input type="radio" name="US" value="true">
          </label>
          <label class="register__label">
            No
            <input type="radio" name="US" value="false">
          </label>
        </div>
        <h2 class="register__subsubname">Declaration</h2>
        <div class="register__flex  register__flex--center">
          <label class="register__label  register__label--checkbox">
            <input type="checkbox" name="Checkbox">
            *I declare that I have read, fully understood and hereby accept the entire text of the <a href="../../img/pdf/Client-Agreement-v1.3.1.pdf" target="_blank">Client Agreement</a>, <a href="../../img/pdf/Privacy-and-Cookies-Policy.pdf" target="_blank">Privacy and Cookies Policy</a>, <a href="../../img/pdf/Best-Interest-and-Order-Execution-Summary.pdf" target="_blank">Order Execution Policy</a>, <a href="../../img/pdf/Risk-Disclosure-Warning-Notice-1.0.1-2.pdf" target="_blank">Risk Disclosure</a>, <a href="../../img/pdf/Client-Categorisation-Policy.pdf" target="_blank">Client Categorisation Policy</a>, <a href="../../img/pdf/Conflicts-of-Interest-Policy-Summary.pdf" target="_blank">Conflicts of Interest Policy</a>, <a href="../../img/pdf/Complaints-Procedure.pdf" target="_blank">Complaint Handling Procedure</a>, <a href="../../img/pdf/Investor-Compensation-Fund.pdf" target="_blank">Investor Compensation Fund</a>.
          </label>
        </div>
        <div class="register__flex">
          <input type="hidden">
          <button class="register__next" type="submit" name="Next Step">Next Step</button>
        </div>
      </form>
      <p class="register__warning">
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
            <a class="footer__callme" href="tel:+442080891644">Call us</a>
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
      <p class="footer__text">Forex24 Global is a brand owned and operated by Lydya Financial Ltd, a Cyprus Investment Firm (CIF) regulated and supervised by the Cyprus Securities and Exchange Commission (CySEC) with CIF Licence number 300/16 and Company registration number HE334292.</p>
      <p class="footer__text">The Company is also registered with: FCA in UK with reg. no. 782501; BaFin in Germany with reg. no. 1349943; CONSOB in Italy with reg. no. 4624; ACP in France with reg. no. 75980; CNMV in Spain with reg. no. 4373.</p>
    </div>
  </footer>
  <script src="../../js/main.min.js" async></script>
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