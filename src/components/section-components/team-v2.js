import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="team-one team-one__about-page">
		  <div className="container">
		    <div className="block-title-two text-center">
		      <p><span>The Brains Behind Our Operation</span></p>
		      <h3>Introducing Our Team</h3>
		    </div>{/* /.block-title */}
			<div className="row">
                        <div className="col-lg-4 col-md-6"> {/* Changed to col-lg-4 to accommodate three members */}
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl+"assets/images/team/Anushka.jpg"} alt={ imagealt } />
                                </div>{/* /.team-one__image */}
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-google-plus-g" /></a> */}
                                        <a href="https://www.instagram.com/anushkakalyan_?igsh=ODFlbHJneGllOXlz"><i className="fab fa-instagram" /></a>
                                        <a href="mailto:anushka.kalyan@gmail.com"><i className="fas fa-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/anushka-kalyan-6882242a5/"><i className="fab fa-linkedin"></i></a>                                    </div>{/* /.team-one__social */}
                                    <h3>Anushka Kalyan</h3>
                                    {/* <p>Climate Justice Advocate</p> */}
                                </div>{/* /.team-one__content */}
                            </div>{/* /.team-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4 col-md-6"> {/* Another team member */}
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl+"assets/images/team/Emily.jpg"} alt={ imagealt } />
                                </div>{/* /.team-one__image */}
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        {/* <a href="#"><i className="fab fa-facebook-f" /></a>
                                        <a href="#"><i className="fab fa-twitter" /></a>
                                        <a href="#"><i className="fab fa-google-plus-g" /></a>
                                        <a href="#"><i className="fab fa-behance" /></a> */}
                                         <a href="https://www.instagram.com/emi_gg15?igsh=dTdkeTU0NjFmcXg0"><i className="fab fa-instagram" /></a>
                                        <a href="mailto:emgorodetskiy@gmail.com"><i className="fas fa-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/emily-gorodetskiy/"><i className="fab fa-linkedin"></i></a>
                                    </div>{/* /.team-one__social */}
                                    <h3>Emily Gorodetskiy</h3>
                                    {/* <p> Founder/President @ YEA and JEC</p> */}
                                </div>{/* /.team-one__content */}
                            </div>{/* /.team-one__single */}
                        </div>{/* /.col-lg-4 */}
                        <div className="col-lg-4 col-md-6"> {/* Another team member */}
                            <div className="team-one__single">
                                <div className="team-one__image">
                                    <img src={publicUrl+"assets/images/team/Jasmine.jpg"} alt={ imagealt } />
                                </div>{/* /.team-one__image */}
                                <div className="team-one__content">
                                    <div className="team-one__social">
                                        {/* <a href="#"><i className="fab fa-facebook-f" /></a> */}
                                        {/* <a href="#"><i className="fab fa-twitter" /></a> */}
                                        {/* <a href="#"><i className="fab fa-google-plus-g" /></a> */}
                                        <a href="https://www.instagram.com/jasmin_e9/"><i className="fab fa-instagram" /></a>
                                        <a href="mailto:jasmine.gl.chao@gmail.com"><i className="fas fa-envelope"></i></a>
                                        <a href="https://www.linkedin.com/in/jasmine-liu-468980232/"><i className="fab fa-linkedin"></i></a>
                                        </div>{/* /.team-one__social */}
                                    <h3>Jasmine Liu</h3>
                                    {/* <p>Co-Founder of NeuraHope</p> */}
                                </div>{/* /.team-one__content */}
                            </div>{/* /.team-one__single */}
                        </div>{/* /.col-lg-4 */}
                    </div>{/* /.row */}
                </div>{/* /.container */}
            </section>
        }
}

export default TeamV2