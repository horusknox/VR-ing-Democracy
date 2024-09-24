import React from "react";
import Navbar from "./global-components/navbar";
import Footer from "./global-components/footer";
//Dont't remove, works when locations are not there
//import CustomAboutForQuestLocation from "./customAboutForQuestLocation";
import CustomQuestLocations from "./customQuestLocations";

const QuestLocation = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <Navbar />
      {/* <CustomAboutForQuestLocation/> */}
      <CustomQuestLocations />
      <Footer />
    </div>
  );
};

export default QuestLocation;
