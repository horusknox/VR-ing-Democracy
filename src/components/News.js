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
        <Navbar />
        {/* Hero Section with Announcement Cards */}
        <section className="hero-section">
          <div className="container">
            
               {/* New Announcement Box for NCOC 2024 Appreciation */}
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
                marginBottom: "20px",
                marginTop: "150px",
              }}
            >
              <h2>Event Highlight: NCOC 2024</h2>
              <p>
                We were honored to be featured at the National Conference on
                Citizenship (NCOC) 2024! Our discussion, "How Are Young People
                Reimagining Civic Solutions?" was a great opportunity to share
                insights on youth-led civic engagement.
              </p>
              <a
                href="https://ncoc.org/2024-agenda/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#ff5733",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                View NCOC 2024 Agenda
              </a>
            </div>

            {/* New Announcement Box for HerGov Appearance */}
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
              }}
            >
              <h2>HerGov: Empowering Young Women in Civic Leadership</h2>
              <p>
                We recently appeared at HerGov, a platform dedicated to
                amplifying young women's voices in civic engagement. Stay tuned
                for more updates on this initiative!
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#d63384",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                Learn More
              </a>
            </div>


            {/* Auto-Playing Video */}
            <div
              className="video-container"
              style={{
                margin: "auto",
                maxWidth: "600px",
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              <br />
              <br />
              <br />
              <br />

              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/NbZg4mcOmeA?autoplay=1&mute=1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "8px",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              ></iframe>
            </div>

            {/* Announcement Box for VRing Democracy */}
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
                marginBottom: "20px",
              }}
            >
              <h2>Press Release: VRing Democracy</h2>
              <p>
                VRing Democracy was recently featured in the press! Discover
                more about the impact and goals of this project:
              </p>
              <a
                href="https://www.kalw.org/show/bay-made/2024-11-07/bay-votes-the-youth-speak"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  marginTop: "10px",
                }}
              >
                VRing Democracy in the Press
              </a>
            </div>

            {/* Existing Announcement Box for Youth Civic Solutions Competition Winners */}
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
                marginBottom: "20px",
              }}
            >
              {/* Image from the website */}
              <img
                src="https://citizensandscholars.org/wp-content/uploads/2024/10/YCSC-14.png"
                alt="Youth Civic Solutions Announcement"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <h2>Announcement: Youth Civic Solutions Competition Winners</h2>
              <p>
                Citizens & Scholars has announced the winners of the Youth
                Civic Solutions Competition. Learn more about the inspiring
                projects and ideas by visiting the link below.
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
                  marginTop: "10px",
                }}
              >
                View Announcement
              </a>
            </div>

         
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default News;
