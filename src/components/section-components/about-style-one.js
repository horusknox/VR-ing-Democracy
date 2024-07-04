import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutStyleOne extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <section className="about-one  go-top">
			  <div className="container">
			    <img src={publicUrl+"assets/images/resources/cta-1-1.png"} alt={ imagealt } className="about-one__moc" />
			    <div className="row justify-content-end">
			      <div className="col-lg-6">
			        <div className="about-one__content">
			          <div className="block-title text-left">
			            {/* <p><span>The Problem</span></p> pink box thingy*/}
			            <h3>The problem<br /></h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <h4>“For immigrants, the voting process can seem complicated and meaningless.”
						<br></br>
						<br></br>
							- Nonprofit Vote
							</h4>
			          <h4>“An individual who votes in one election is likely to vote in the subsequent election.”
						<br></br>
						<br></br>
							- University College Dublin
					  </h4>
			          {/* <Link to="/about" className="thm-btn about-one__btn">Read More <i className="fa fa-angle-double-right" /></Link> */}
			          {/* /.thm-btn */}
			        </div>{/* /.about-one__content */}


					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default AboutStyleOne