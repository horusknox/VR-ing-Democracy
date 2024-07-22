import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CustomAboutForQuestLocation extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className="service-two service-two__service-page service-two__about-page  go-top">
        <div className="container">
          <div className="row">
            <div style={{ margin: "auto" }}>
              {/* <div className="service-two__image">
			          <img src={publicUrl+"assets/images/resources/about-page-moc-1.jpg"}  style={{borderRadius:'50px'}} alt={ imagealt } />
			        </div> */}
              {/* /.service-two__image */}
            </div>
            {/* /.col-lg-6 */}
            <div>
              <div className="service-two__block">
                <div className="block-title-two text-left">
                  <p>Please bare with us!</p>
                  <h3>Coming soon</h3>
                </div>
                {/* /.block-title-two */}
                <p>
                  {" "}
                  “We would also like to bring the VR-ing Democracy experience
                  to events at 220 Montgomery (Latino Vote panel with El
                  Tecolote/Accion Latina on Sept 24th and AAPI Vote panel with
                  SF Public Press either Tue Sept 3 or Tue Oct 15). “
                </p>
                <a class="thm-btn banner-one__btn" href="https://forms.gle/Q8hsDJWFTpyfpeQA6" style={{color:"white",backgroundColor:"black"}}> Pre Register Now!<i class="fa fa-angle-double-right"></i></a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                By pre-registering for our cause, you will be the first to get
                access to:
                <ul>
                  <li>Major updates in our development (ALPHA, BETA, FINAL RELEASE).</li>
                  <li>EXCLUSIVE Opportunities to join our Executive Board and becomea Chapter Founder.</li>
                     <li>Sign-ups to test our product!</li> 
                    <li>Network with policy professionals and our Meta mentors</li> 
                  <li>And MUCH, MUCH more!</li>
                </ul>
              </div>    
              {/* /.service-two__block */}
            </div>
            {/* /.col-lg-5 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default CustomAboutForQuestLocation;
