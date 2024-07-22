import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class FunfactV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="funfact-one funfact-one__home-two funfact-one__about-page">
			  <div className="container">
			    <div className="row high-gutter">
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-user-alt" />
			          </div>
			          <h3><span className="counter">69696969</span>+</h3>
			          <p>Project</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-heart" />
			          </div>
			          <h3><span className="counter">3.1415926535897932</span>+</h3>
			          <p>Satisfied Clients</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-cloud-download" />
			          </div>
			          <h3><span className="counter">90</span>
			          </h3>
			          <p>Win Awards</p>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="funfact-one__single">
			          <div className="funfact-one__icon">
			            <i className="far fa-star" />
			          </div>
			          <h3><span className="counter">5</span>+</h3>
			          <p>Team Member</p>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        }
}

export default FunfactV4
