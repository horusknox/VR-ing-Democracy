import React, { Component } from 'react';

class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <>
        {/* Scrolling Announcement */}
        <div
          className="announcement-bar d-flex align-items-center"
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            backgroundColor: '#d24ca2', // Matches your style
            color: '#fff',
            zIndex: 10,
          }}
        >
          <div
            className="announcement-content"
            style={{
              display: 'inline-block',
              animation: 'scroll 10s linear infinite',
            }}
          >
            <span style={{ marginRight: '20px', fontSize: '16px', color: '#fff' }}>
              AI Policy and Social Impact Webinar in collaboration with OpenNLP Labs
            </span>
            <a
              href="https://www.eventbrite.com/e/ai-policy-and-social-impact-webinar-tickets-1097388581789?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                marginLeft: '20px',
                backgroundColor: '#007bff',
                border: 'none',
                padding: '8px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Sign up now!
            </a>
          </div>
        </div>

        <style>
          {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          `}
        </style>

        {/* Banner Section */}
        <section
          className="banner-one go-top"
          style={{
            backgroundImage: `url(${publicUrl}assets/images/backgrounds/banner-bg-1-1.png)`,
          }}
        >
          <img
            src={`${publicUrl}assets/images/resources/banner-1-1.png`}
            alt={imagealt}
            className="banner-one__moc"
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-one__content">
                  <h3>
                    <span>VR'ing </span> <br />
                    Democracy <br />
                  </h3>
                  <p>Empowering every vote through virtual reality</p>
                  <a
                    className="thm-btn banner-one__btn"
                    href="https://forms.gle/Q8hsDJWFTpyfpeQA6"
                  >
                    Pre Register Now!
                    <i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Banner;
