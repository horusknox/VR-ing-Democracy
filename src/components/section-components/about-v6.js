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
                    </div>{/* /.about-three__content */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-xl-6 d-flex justify-content-center">
                    <div className="video-one__box" style={{ position: 'relative' }}>
                      <img src={publicUrl+"assets/images/resources/video-4-1.png"} alt={ imagealt } style={{ position: 'relative', top: '10px' }} />
                      <a href='https://www.instagram.com/reel/C7_yhfEIsvk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' className='video-one__btn'><i className="fa fa-play" /></a> 
                    </div>{/* /.video-one__box */}
                  </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
                <div className="row mt-5">
                  <div className="col-xl-6 order-xl-2">
                    <div className="about-three__content">
                      <div className="block-title-two text-left">
                        <p>Our Vision</p>
                        <h3>Bringing Technology <br /> to Empower Communities</h3>
                      </div>{/* /.block-title-two */}
                      <p>Our goal is to bridge the gap in technology access by introducing VR-based educational programs. We aim to empower individuals with immersive experiences that enhance understanding and build confidence in participating in democratic processes.</p>
                    </div>{/* /.about-three__content */}
                  </div>{/* /.col-lg-6 */}
                  <div className="col-xl-6 order-xl-1 d-flex justify-content-center">
                    <div className="video-one__box" style={{ position: 'relative' }}>
                      <img src={publicUrl+"assets/images/resources/panel.png"} alt={ imagealt } style={{ position: 'relative', top: '75px' }} />
                      <a href='https://youtu.be/NbZg4mcOmeA?si=SMcrkgWgm8ChX9bU' className='video-one__btn'><i className="fa fa-play" /></a> 
                    </div>{/* /.video-one__box */}
                  </div>{/* /.col-lg-6 */}
                </div>{/* /.row */}
              </div>{/* /.container */}
            </section>
        }
}

export default AboutV6
