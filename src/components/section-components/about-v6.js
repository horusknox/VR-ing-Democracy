import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV6 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-three about-three__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-6">
			        <div className="about-three__content">
			          <div className="block-title-two text-left">
			            <p>What we do</p>
			            <h3>Empower Voters <br /> Through Virtual Reality</h3>
			          </div>{/* /.block-title-two */}
			          <p>We will partner with nonprofit organizations related to our mission of expanding democratic participation & organizations targeting underrepresented communities, utilize crowdfunding and business sponsorships to get VR product in low-income community libraries, and organize public events with VR technology in marginalized communities.</p>
			          {/* <h4>Started With Us</h4>
			          <p>Domnis iste natus error sit voluptatem accusantium mque laudantium totam see
			            rem aperiam eaque ipsa quae abillo inventore veritatis et quasi</p>
			          <Link to="/service-details" className="thm-btn about-three__btn">Read More <i className="fa fa-angle-double-right" /></Link> */}
			          {/* /.thm-btn about-three__btn */}
			        </div>{/* /.about-three__content */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-xl-6 d-flex justify-content-center">
			        <div className="video-one__box">
			          <img src={publicUrl+"assets/images/resources/video-4-1.png"} alt={ imagealt } />
			          {/* <a href="https://www.instagram.com/reel/C7_yhfEIsvk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="video-popup video-one__btn"> </a>*/}
					  <a href='https://www.instagram.com/reel/C7_yhfEIsvk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' className='video-one__btn'><i className="fa fa-play" /></a> 
			        </div>{/* /.video-one__box */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>
        }
}

export default AboutV6