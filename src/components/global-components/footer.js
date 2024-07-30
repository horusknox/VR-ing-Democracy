import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer_v1 extends Component {
  componentDidMount() {
    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/theme.js";

    document.body.appendChild(minscript);

    $(".go-top")
      .find("a")
      .on("click", function () {
        $(window).scrollTop(0);
      });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "Footer logo";

    const iconStyle = {
      fontSize: "64px", /* Adjust as needed */
      marginRight: "15px", /* Space between icons */
    };

    const emailIconStyle = {
      fontSize: "32px", /* Adjust as needed */
    };

    return (
      <div>
        <footer className="site-footer-one">
          <div className="site-footer-one__upper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-widget footer-widget__about">
                    <p>
                      Social Links
                    </p>
                    <div className="footer-widget__social">
                      <a href="https://www.instagram.com/vring.democracy/">
                        <i className="fab fa-instagram" style={iconStyle} />
                      </a>
                      <a href="https://www.linkedin.com/company/vr%E2%80%99ing-democracy/?viewAsMember=true">
                        <i className="fab fa-linkedin" style={iconStyle} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="footer-widget footer-widget__contact">
                    <div className="footer-widget__contact-box">
                      <div className="footer-widget__contact-top">
                        <i className="far fa-envelope" style={emailIconStyle} />
                        <h3>E-Mail</h3>
                      </div>
                      <a href="mailto:vringdemocracy@gmail.com">vringdemocracy@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer-one__bottom">
            <div className="container">
              <div className="site-footer-one__bottom-line" />
              <p>
                Copy@2024 <a href="#">VR'ing Democracy</a>. All Right Reserved.
                Design By LayerDrops.{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer_v1;
