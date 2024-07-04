import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Team extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

        return (
            <section className="team-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h3><span>The Team</span></h3>
                        {/* <h3>Meet Our Exclusive <br /> Team Member</h3> */}
                        <div className="block-title__line" />{/* /.block-title__line */}
                    </div>{/* /.block-title */}
                    <div className="row">
                        <div className="col-lg-4 col-md-6"> {/* Changed to col-lg-4 to accommodate three members */}
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl+"assets/images/team/team-1-1.jpg"} alt={ imagealt } />
                                </div>{/* /.team-one__image */}
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                                        <a href="#"><i className="fab fa-behance" /></a>
                                    </div>{/* /.team-one__social */}
                                    <h3>Anushka Kalyan</h3>
                                    <p>Web designer</p>
                                </div>{/* /.team-one__content */}
                            </div>{/* /.team-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4 col-md-6"> {/* Another team member */}
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl+"assets/images/team/team-1-2.jpg"} alt={ imagealt } />
                                </div>{/* /.team-one__image */}
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                                        <a href="#"><i className="fab fa-behance" /></a>
                                    </div>{/* /.team-one__social */}
                                    <h3>Jasmine Liu</h3>
                                    <p>Web designer</p>
                                </div>{/* /.team-one__content */}
                            </div>{/* /.team-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4 col-md-6"> {/* Another team member */}
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl+"assets/images/team/team-1-3.jpg"} alt={ imagealt } />
                                </div>{/* /.team-one__image */}
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                                        <a href="#"><i className="fab fa-behance" /></a>
                                    </div>{/* /.team-one__social */}
                                    <h3>Emily Gorodetskiy</h3>
                                    <p>Founder/President @ YEA and JEC</p>
                                </div>{/* /.team-one__content */}
                            </div>{/* /.team-one__single */}
                        </div>{/* /.col-lg-4 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
        );
    }
}

export default Team;
