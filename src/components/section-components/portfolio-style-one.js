import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioONe extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        let imagealt = 'image';

        return (
            <section className="portfolio-one go-top" style={{ padding: '60px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div className="container" style={{ margin: '0 auto', maxWidth: '1200px' }}>
                    <div className="block-title text-center" style={{ marginBottom: '60px' }}>
                        <h3><u>Our<span style={{ color: '#ff57a4' }}> Partners</span></u></h3>
                    </div>
                    <div className="row">
                        {/* Partner 1 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/portfolio-1-2.png"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://lwvsf.org/" style={{ color: '#000', textDecoration: 'none' }}>League of Women Voters of San Francisco</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner 2 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/civicsunplugged.png"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://www.civicsunplugged.org/" style={{ color: '#000', textDecoration: 'none' }}>Civics Unplugged</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner 3 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/opennlp-logo.webp"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://opennlp.apache.org/" style={{ color: '#000', textDecoration: 'none' }}>OPEN NLP</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner 4 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/sfe_seallogo.png"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://sfelections.org/tools/portal/" style={{ color: '#000', textDecoration: 'none' }}>San Francisco Department of Elections</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner 5 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/KALW logo.webp"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://www.kalw.org/" style={{ color: '#000', textDecoration: 'none' }}>KALW</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner 6 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/mancys logo.webp"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://www.macys.com/" style={{ color: '#000', textDecoration: 'none' }}>Macy’s</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner 7 */}
                        <div className="col-lg-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                            <div className="portfolio-one__single" style={{ textAlign: 'center', border: '1px solid #ddd', padding: '20px', borderRadius: '5px' }}>
                                <img src={publicUrl + "assets/images/portfolio/sfpl.webp"} alt={imagealt} style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
                                <div className="portfolio-one__content">
                                    <div className="portfolio-one__content-inner">
                                        <h3 style={{ fontSize: '20px', margin: '0 0 10px' }}>
                                            <Link to="https://sfpl.org/" style={{ color: '#000', textDecoration: 'none' }}>San Francisco Public Library</Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PortfolioONe;
