import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleTwo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-two  go-top">
		  <img src={publicUrl+"assets/images/shapes/about-two-bg.png"} alt={ imagealt } className="about-two__bg" />
		  <div className="container">
		    <img src={publicUrl+"assets/images/resources/cta-2-1.png"} alt={ imagealt } className="about-two__moc" />
		    <div className="row">
		      <div className="col-lg-6">
		        <div className="about-two__content">
		          <div className="block-title text-left">
		            <p><span></span></p>
		            <h3>Major concerns 
						<br />
						 </h3>
		            <div className="block-title__line" />{/* /.block-title__line */}
		          </div>{/* /.block-title */}
		          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incid idunt ut labore
		            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi
		            ut aliquip exea commodo consequat.</p> */}
		          <div className="about-two__box">
		            <div className="about-two__box-icon">
					<i className="fas fa-exclamation-circle" />
		            </div>{/* /.about-two__box-icon */}
		            <div className="about-two__box-content">
		              <h3>Issue</h3>
		              <p>Minority communities continue to exhibit lower turnout rates
					  in voting due to historical lack of experience with the process.</p>
		            </div>{/* /.about-two__box-content */}
		          </div>{/* /.about-two__box */}
		          <div className="about-two__box">
		            <div className="about-two__box-icon">
					<i className="fas fa-bullseye" />
		            </div>{/* /.about-two__box-icon */}
		            <div className="about-two__box-content">
		              <h3>Impact</h3>
		              <p>
						When underrepresented communities don't vote, their
voices on critical issues are persistently disregarded by historically
inattentive governments.
</p>
		            </div>{/* /.about-two__box-content */}
		          </div>{/* /.about-two__box */}
		        </div>{/* /.about-two__content */}
		      </div>{/* /.col-lg-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		  <br></br>
		</section>



        }
}

export default AboutStyleTwo