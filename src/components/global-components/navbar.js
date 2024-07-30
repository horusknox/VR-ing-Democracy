import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 768
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ isMobile: window.innerWidth <= 768 });
  }

  render() {
    const { isMobile } = this.state;
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'logo';
    let anchor = '#';

    return (
      <header className="site-header-one go-top" style={{ marginBottom: "20px" }}>
        <nav className="main-nav__one stricky" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 20px' }}>
          <div className="container-fluid" style={{ position: 'relative', width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="main-nav__logo-box" style={{ position: 'absolute', left: '10px', top: '300%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <img
                  src={publicUrl + "assets/images/logo-full-light.jpg"}
                  alt={imgattr}
                  style={{ transform: 'scale(0.6)', transformOrigin: '0 0', display: isMobile ? 'none' : 'block' }}
                />
              </Link>
              <a href="#" className="side-menu__toggler">
                <i className="fa fa-bars" style={{ color: "black" }} />
              </a>
            </div>{/* /.main-nav__logo-box */}
            <div className="main-nav__main-navigation">
              <ul className="main-nav__navigation-box">
                <li>
                  <Link to="/" style={{ color: 'black' }}>Home</Link>
                </li>
                <li>
                  <Link to="/about" style={{ color: 'black' }}>About Us</Link>
                </li>
                <li>
                  <Link to="/QuestLocation" style={{ color: 'black' }}>Quest Location</Link>
                </li>
                <li>
                  <Link to="/News" style={{ color: 'black' }}>News</Link>
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
    );
  }
}

export default Navbar;
