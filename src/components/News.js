import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import Footer from "./global-components/footer";

class News extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <br />
        <br />
        <br />
        <Navbar />
        {/* Hero Section with Announcement Card */}
        <section className="hero-section">
          <div className="container">
            <div
              className="announcement-card"
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "20px",
                maxWidth: "600px",
                margin: "auto",
                textAlign: "center",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "100px"
              }}
            >
              {/* Image from the website */}
              <img
                src="https://citizensandscholars.org/wp-content/uploads/2024/10/YCSC-14.png"
                alt="Youth Civic Solutions Announcement"
                style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
              />
              <h2>Announcement: Youth Civic Solutions Competition Winners</h2>
              <p>
                Citizens & Scholars has announced the winners of the Youth Civic
                Solutions Competition. Learn more about the inspiring projects and
                ideas by visiting the link below.
              </p>
              <a
                href="https://citizensandscholars.org/citizens-scholars-announces-winners-of-the-youth-civic-solutions-competition/?utm_content=bufferd468d&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  marginTop: "10px"
                }}
              >
                View Announcement
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
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
                    <br />
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
