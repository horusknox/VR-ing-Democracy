import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="banner-one go-top" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/banner-bg-1-1.png)'}}>
				  <img src={publicUrl+"assets/images/resources/banner-1-1.png"} alt={ imagealt } className="banner-one__moc" />
				  <div className="container-fluid">
				    <div className="row">
				      <div className="col-lg-6">
				        <div className="banner-one__content">
				          <h3><span>VR'ing </span> <br />Democracy <br /></h3>
				          <p>Empowering every vote through virtual reality</p>
				          {/* <Link to="/service" className="thm-btn banner-one__btn"> Get in touch <i className="fa fa-angle-double-right" /></Link> */}
						  <a class="thm-btn banner-one__btn" href="https://forms.gle/Q8hsDJWFTpyfpeQA6"> Pre Register Now!<i class="fa fa-angle-double-right"></i></a>
						</div>
				      </div>
				    </div>
				  </div>
				</section>
        }
}

export default Banner