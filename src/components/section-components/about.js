import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<section className="service-two service-two__service-page service-two__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="service-two__image">
			          <img src={publicUrl+"assets/images/resources/about-page-moc-1.png"} alt={ imagealt } />
			        </div>{/* /.service-two__image */}
			      </div>{/* /.col-lg-6 */}
			      <div className="col-lg-6">
			        <div className="service-two__block">
			          <div className="block-title-two text-left">
			            <p>about us</p>
			            <h3>Jasmine<br /> Liu</h3>
			          </div>{/* /.block-title-two */}
			          <p>This is a test commit for jasmine to understand github and react.js </p>
			          <ul className="list-unstyled video-one__list">
			            <li>
			              <i className="far fa-check" />
			              Smashing Book 6 Is Here New Frontiers In Web Design
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Introduction To Animation And The iMessage App Store With Shruggie
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Get Your Mobile Site Ready For The 2018 Holiday ways goods
			            </li>
			            <li>
			              <i className="far fa-check" />
			              Making Distributed Product Teams Work More Efficiently other
			            </li>
			          </ul>{/* /.list-unstyled video-one__list */}
			          <Link to="/service" className="thm-btn">Read More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.service-two__block */}
			      </div>{/* /.col-lg-5 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>



        }
}

export default AboutPage
