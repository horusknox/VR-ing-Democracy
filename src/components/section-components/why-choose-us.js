import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class WhyChooseUs extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <section className="service-one go-top">
          <div className="container">
            <div className="block-title text-center">
              <p><span>OVERVIEW</span></p>
              <h3>Empowering U.S. Immigrants to Vote <br />
                Confidently</h3>
              <div className="block-title__line" />{/* /.block-title__line */}
            </div>{/* /.block-title */}
            <div className="row high-gutter  go-top">
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-1.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Transforming US Voting Trends with Virtual Reality</Link></h3>
                      <p>Voting Innovation</p>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>Immigrants in the U.S. face language barriers and limited polling knowledge. VR can offer multilingual virtual polling experience and voter education, making voting more accessible.</p>                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-2.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3>
                      Empowering U.S. Immigrants
                        {/* <Link to="/service-details">SEO, PPC &amp; Social
                          Media Soluation</Link> */}
                          </h3>
                      <p>Vote Confidently</p>
                      <br></br>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>
                  Our VR project helps U.S. immigrants learn about voting through immersive simulations. It provides hands-on experience that is really helpful for first-time voters. This empowers them to confidently participate in elections.
                    </p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
              <div className="col-lg-4">
                <div className="service-one__single">
                  <div className="service-one__top">
                    <div className="service-one__icon">
                      <img src={publicUrl+"assets/images/shapes/service-i-3.png"} alt={ imagealt } />
                    </div>{/* /.service-one__icon */}
                    <div className="service-one__top-content">
                      <h3><Link to="/service-details">Enhancing Civic Engagement Through VR
                      </Link></h3>
                      <p>Strengthening Democracy</p>
                      <br></br>
                    </div>{/* /.service-one__top-content */}
                  </div>{/* /.service-one__top */}
                  <p>
                  This VR project enhances the USA by encouraging civic engagement among immigrants, fostering a more informed electorate. By simplifying the voting process, it promotes inclusivity and ensures diverse voices are heard, strengthening democracy.
                   </p>
                </div>{/* /.service-one__single */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>

        }
}

export default WhyChooseUs