import React from "react";
import "../styles/QuickLinks.scss";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import scrollToComponent from "react-scroll-to-component";

class CookiesPolicy extends React.Component {
  // This function make sure we scroll the page view to top when we enter the page
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // This function scroll to the required class section
  handleClick() {
    scrollToComponent(this.className);
  }

  render() {
    return (
      <div className="policyWrapper">
        <Navbar />
        <div className="intro">
          <h1>
            CVFY
            <br />
            Cookies Policy
          </h1>

          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pig ball tip kielbasa
            flank pork belly, meatloaf brisket drumstick tri-tip swine shankle
            buffalo. Beef swine drumstick short ribs buffalo pancetta bacon
            frankfurter.Spicy jalapeno bacon ipsum dolor amet cow pig ball tip
            kielbasa flank pork belly, meatloaf brisket drumstick tri-tip swine
            shankle buffalo. Beef swine drumstick short ribs buffalo pancetta
            bacon frankfurter.Spicy jalapeno bacon ipsum dolor amet cow pig ball
            tip kielbasa flank pork belly, meatloaf brisket drumstick tri-tip
            swine shankle buffalo. Beef swine drumstick short ribs buffalo
            pancetta bacon frankfurter.
          </p>
          <p>
            Spicy jalapeno bacon ipsum dolor amet cow pig ball tip kielbasa
            flank pork belly, meatloaf brisket drumstick tri-tip swine shankle
            buffalo. Beef swine drumstick short ribs buffalo pancetta bacon
            frankfurter.Spicy jalapeno bacon ipsum dolor amet cow pig ball tip
            kielbasa flank pork belly, meatloaf brisket drumstick tri-tip swine
            shankle buffalo. Beef swine drumstick short ribs buffalo pancetta
            bacon frankfurter.Spicy jalapeno bacon ipsum dolor amet cow pig ball
            tip kielbasa flank pork belly, meatloaf brisket drumstick tri-tip
            swine shankle buffalo. Beef swine drumstick short ribs buffalo
            pancetta bacon frankfurter. Spicy jalapeno bacon ipsum dolor amet
            cow pig ball tip kielbasa flank pork belly, meatloaf brisket
            drumstick tri-tip swine shankle buffalo. Beef swine drumstick short
            ribs buffalo pancetta bacon frankfurter.
          </p>
        </div>
        <div className="table-of-content">
          <section>
            <h2>Table Of Content:</h2>
            <ul>
              <li key="1">
                <button onClick={() => scrollToComponent(this.whatIsACookie)}>
                  What is a cookie
                </button>
              </li>
              <li key="2">
                <button onClick={() => scrollToComponent(this.useOfCookies)}>
                  Use of cookies and web storage(browsing data) by CVFY
                </button>
              </li>
              <li key="3">
                <button
                  onClick={() => scrollToComponent(this.enablingDisabling)}
                >
                  Disabling/Enabling Cookies
                </button>
              </li>
            </ul>
          </section>
          <section>
            <div id="cookies-content" className="termsParagraphs">
              <h2
                ref={section => {
                  this.whatIsACookie = section;
                }}
              >
                What is a cookie
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.useOfCookies = section;
                }}
              >
                Use of cookies and web storage(browsing data) by CVFY
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
            <div className="termsParagraphs">
              <h2
                ref={section => {
                  this.enablingDisabling = section;
                }}
              >
                Disabling/Enabling Cookies
              </h2>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
              <p>
                Sirloin hamburger meatloaf kielbasa. Shankle tail cow sirloin,
                rump biltong burgdoggen prosciutto short loin leberkas
                turducken. Chuck sausage beef ribs ground round strip steak,
                chicken tongue capicola spare ribs t-bone swine turkey
                tenderloin. Shoulder jowl pancetta short loin capicola chuck
                beef corned beef flank swine. Ham buffalo kevin pork chop chuck.
              </p>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CookiesPolicy;
