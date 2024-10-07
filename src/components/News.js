import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import Footer from "./global-components/footer";

class News extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Navbar />
        <section className="service-two service-two__service-page service-two__about-page go-top">
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
              </div>
              <div className="col-lg-6">
                <div className="service-two__block">
                  <div className="block-title-two text-left">
                  <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/wx1xCjxkETc?"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/39VZs7WW8VQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <br></br>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/N80hbrR6U28"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
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
