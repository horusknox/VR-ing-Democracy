import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
           <header className="site-header-one go-top" style={{"marginBottom":"20px"}}>
			  <nav className="main-nav__one stricky">
			    <div className="container-fluid">
			      <div className="main-nav__logo-box">
			        <Link to="/">
			          {/* <img src={publicUrl+"assets/images/logo-full-light.png" } alt={ imgattr } /> */}
					  {/* <img src={publicUrl + "assets/images/logo-full-light.jpg"} alt={imgattr} style={{ transform: 'scale(0.5)', transformOrigin: '0 0' }} /> */}
			        </Link>
					<a href="#" className="side-menu__toggler">
      <i className="fa fa-bars"  style={{color:"black"}}/>
    </a>			     
	 </div>{/* /.main-nav__logo-box */}
			      <div className="main-nav__main-navigation">
			        <ul className=" main-nav__navigation-box">
			          {/* <li> */}
			          <li>
			            <Link to="/" style={{ color: 'black' }}>Home</Link>
			            {/* <ul>
			              <li><Link to="/home-v2">Home 02</Link></li>
			              <li><Link to="/home-v3">Home 03</Link></li>
			              <li><Link to="/home-v4">Home 04</Link></li>
			            </ul>/.sub-menu*/}
			          </li> 
			          <li>
			            <Link to="/about" style={{ color: 'black' }}>About Us</Link>
			          </li>
			          {/* <li> */}
			          {/* <li className="dropdown"> */}
			            {/* <a href="#">Services</a> */}
			            {/* <ul>
			              <li><Link to="/service">Services 01</Link></li>
			              <li><Link to="/service-v2">Services 02</Link></li>
			              <li><Link to="/service-details">Services Details</Link></li>
			            </ul> */}
						{/* /.sub-menu */}
			          {/* </li> */}
			          <li>
			          {/* <li className="dropdown"> */}
			            {/* <a href="/QuestLocation">Quest location</a> */}
			            <Link to="/QuestLocation" style={{ color: 'black' }}>Quest Location</Link>
			            {/* <ul>
			              <li><Link to="/portfolio-standard">Portfolio Standard</Link></li>
			              <li><Link to="/portfolio-full">Portfolio Full</Link></li>
			              <li><Link to="/portfolio-masonary">Portfolio Masonary</Link></li>
			              <li><Link to="/portfolio-details">Portfolio Details</Link></li>
			            </ul> */}
						{/* /.sub-menu */}
			          </li>
			          {/* <li> */}
			          {/* <li className="dropdown"> */}
			            {/* <a href="#">Pages</a> */}
			            {/* <ul>
			              <li><Link to="/pricing">Pricing</Link></li>
			              <li><Link to="/faq">FAQ</Link></li>
			              <li><Link to="/testimonial">Testimonials</Link></li>
			              <li><Link to="/team">Team</Link></li>
			            </ul> */}
						{/* /.sub-menu */}
			          {/* </li> */}
			          <li>
			          {/* <li className="dropdown"> */}
			            <Link to="/News" style={{ color: 'black' }}>News</Link>
			            {/* <ul>
			              <li><Link to="/blog-grid">News Page</Link></li>
			              <li><Link to="/blog-list">News List</Link></li>
			              <li><Link to="/blog-details">News Details</Link></li>
			            </ul> */}
						{/* /.sub-menu */}
			          </li>
			          <li>
			            <Link to="/contact" style={{ color: 'black' }}>Contact</Link>
			          </li>
			        </ul>
			      </div>{/* /.main-nav__main-navigation */}
			      <div className="main-nav__right">
			        {/* <Link to="/contact" className="thm-btn">FAQs<i className="fa fa-angle-right" /></Link> */}
			      </div>
			    </div>
			  </nav>
			</header>
        )
    }
}

export default Navbar;