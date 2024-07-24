import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Navbar from "./global-components/navbar";
import Footer from "./global-components/footer-v2";

class News extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <Navbar />
        <section className="service-two service-two__service-page service-two__about-page  go-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="service-two__image">
                  <img
                    src={
                      publicUrl + "assets/images/resources/about-page-moc-1.jpg"
                    }
                    style={{ borderRadius: "50px" }}
                    alt={imagealt}
                  />
                </div>
                {/* /.service-two__image */}
              </div>
              {/* /.col-lg-6 */}
              <div className="col-lg-6">
                <div className="service-two__block">
                  <div className="block-title-two text-left">
                    <p>We'll be right back!</p>
                    <h3>Please stay tuned in!</h3>
                  </div>
                  {/* /.block-title-two */}
                  <p>
                    We will be sure to put any and all updates, announcements and other important stuff here ASAP!
                  </p>
                  {/* <ul className="list-unstyled video-one__list">
                    <li>
                      <i className="far fa-check" />
                      Fight off the daunting steps into democratic
                      participation.
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Help each citizen make informed decisions
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Alleviate the tech divide{" "}
                    </li>
                  </ul> */}
                  {/* /.list-unstyled video-one__list */}
                  {/* <Link to="/service" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link> */}
                  <a
                    class="thm-btn banner-one__btn"
                    href="https://forms.gle/Q8hsDJWFTpyfpeQA6"
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    Pre Register Now!<i class="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default News;
