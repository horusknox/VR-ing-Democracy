import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Skill extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="progress-one">
			  <img src={publicUrl+"assets/images/shapes/progress-bg-1.png"} alt={ imagealt } className="progress-one__bg" />
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/progress-1-1.png"} alt={ imagealt } className="progress-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="progress-one__content">
			          <div className="block-title text-left">
			            {/* <p><span></span></p> */}
			            <h3>Let's talk Numbers</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>Here are a few statistics about U.S. voting in the past 10 years (Approx.)</p>
			          <div className="progress-one__progress-wrap">
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Young voters (ages 18-29) </h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '47.5%', backgroundColor: '#3f02a8'}}>
			                  <b>47.5%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Registraitons for voting</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '75%', backgroundColor: '#ff57a4'}}>
			                  <b>75%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Economically backward people who vote</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '68.2%', backgroundColor: '#00c8b3'}}>
			                  <b>68.2%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			            <div className="progress-one__progress__bar">
			              <div className="progress-one__progress__bar-top">
			                <h3>Eligible immigrant who vote</h3>
			              </div>{/* /.progress-one__progress__bar-top */}
			              <div className="progress-one__progress__bar-line">
			                <span className="wow fadeIn" data-wow-duration="1500ms" style={{width: '54.7%', backgroundColor: '#ff9b0d'}}>
			                  <b>54.7%</b></span>
			              </div>{/* /.progress-one__progress__bar-line */}
			            </div>{/* /.progress-one__progress__bar */}
			          </div>{/* /.progress-one__progress-wrap */}
			        </div>{/* /.progress-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row justify-content-end */}
			  </div>{/* /.container */}
			</section>


        }
}

export default Skill