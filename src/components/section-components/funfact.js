import React, { Component } from 'react';
import parse from 'html-react-parser';

class Funfact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <section className="funfact-one">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-3 col-md-6">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-mug-hot" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span>$ </span><span className="counter">13400</span>{/* /.counter */}+</h3>
		          <p>Grants</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-heart" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">1427</span>{/* /.counter */}+</h3>
		          <p>Supporters</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-award" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">600</span>+{/* /.counter */}
		          </h3>
		          <p>Impressions</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		      <div className="col-lg-3 col-md-6">
		        <div className="funfact-one__single">
		          <div className="funfact-one__icon">
		            <i className="far fa-user-alt" />
		          </div>{/* /.funfact-one__icon */}
		          <h3><span className="counter">5</span>{/* /.counter */}+</h3>
		          <p>Partners</p>
		        </div>{/* /.funfact-one__single */}
		      </div>{/* /.col-lg-3 col-md-6 */}
		    </div>{/* /.row */}
		  </div>{/* /.container */}
		</section>


        }
}

export default Funfact