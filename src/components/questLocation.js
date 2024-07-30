import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import About from "./section-components/about";
import FunfactV4 from "./section-components/funfact-v4";
import Cta from "./section-components/cta-v9";
import Team from "./section-components/team-v2";
import Testimonial from "./section-components/testimonial-style-one";
import Brand from "./section-components/brand-v4";
import Footer from "./global-components/footer";
import CustomAboutForQuestLocation from "./customAboutForQuestLocation";


const QuestLocation = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      <CustomAboutForQuestLocation/>
      <Footer />
    </div>
  );
};

export default QuestLocation;
