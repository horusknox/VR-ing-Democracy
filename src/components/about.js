import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import About from "./section-components/about";
import FunfactV4 from "./section-components/funfact-v4";
import Cta from "./section-components/cta-v9";
import Team from "./section-components/team-v2";
import Testimonial from "./section-components/testimonial-style-one";
import Brand from "./section-components/brand-v4";
import AboutV6 from "./section-components/about-v6";
import Footer from "./global-components/footer-v2";

const AboutPage = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <PageHeader headertitle="About Us" />
      <About />
      {/* <FunfactV4 /> */}
      <Cta />
      <Team />
      <hr
        style={{
          border: "none",
          height: "2px",
          background: "linear-gradient(to right,#8a3eaf, #5f2fbd)",
          margin: "auto",
          width: "30%",
        }}
      />{" "}
      {/* <Testimonial /> */}
      <Brand />
      <AboutV6 />
      <Footer />
    </div>
  );
};

export default AboutPage;
