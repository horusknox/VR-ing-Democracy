import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioONe extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'
        let imagealt = 'image'

        return (
            <section className="portfolio-one go-top" style={{ padding: '60px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="container" style={{ margin: '0 auto', maxWidth: '1200px' }}>
                    <div className="block-title text-center" style={{ marginBottom: '60px' }}>
                        {/* <p><span>Our Project</span></p> */}
                        <h3><u>Our<span style={{color:'#ff57a4'}}> Partners</span> </u></h3>
                        {/* <div className="block-title__line" style={{ width: '100px', height: '4px', backgroundColor: '#000', margin: '0 auto' }} /> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/portfolio-1-2.png"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://lwvsf.org/" style={{ color: '#000', textDecoration: 'none' }}>League of Women Voters of San Francisco</Link>
                                        </h3>
                                        {/* <p style={{ color: '#666', margin: '0' }}>Design, Branding</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="portfolio-one__more-btn__block text-center" style={{ marginTop: '40px' }}>
                        <Link to="/portfolio-full" className="thm-btn portfolio-one__more-btn" style={{ display: 'inline-block', padding: '10px 30px', backgroundColor: '#000', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}>
                            View More <i className="fa fa-angle-double-right" style={{ marginLeft: '10px' }} />
                        </Link>
                    </div> */}
                </div>
            </section>
        );
    }
}

export default PortfolioONe;
