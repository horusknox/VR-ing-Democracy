import React, { Component } from 'react';

class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imagealt = 'image';

    return (
      <>
        {/* Scrolling Announcement */}
        <div className="announcement-bar" style={styles.announcementBar}>
        
          <span style={styles.announcementText}>
            AI Policy and Social Impact Webinar in collaboration with OpenNLP Labs
          </span>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		    <a
            href="https://www.eventbrite.com/e/ai-policy-and-social-impact-webinar-tickets-1097388581789?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.announcementButton}
          >
            Sign up now!
          </a>
        </div>

        {/* Banner Section */}
        <section
          className="banner-one go-top"
          style={{
            backgroundImage: `url(${publicUrl}assets/images/backgrounds/banner-bg-1-1.png)`,
          }}
        >
          <img
            src={publicUrl + 'assets/images/resources/banner-1-1.png'}
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



const styles = {
	announcementBar: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding: '10px',
	  fontSize: '16px',
	  color: '#fff',
	  position: 'relative',
	  zIndex: 10,
	  overflow: 'hidden',
	  whiteSpace: 'nowrap',
	  backgroundColor: '#000000',
	},
	announcementButton: {
	  display: 'inline-block',
	  backgroundColor: '#007bff',
	  color: '#fff',
	  padding: '8px 15px',
	  borderRadius: '5px',
	  textDecoration: 'none',
	  fontWeight: 'bold',
	  marginRight: '10px',
	  cursor: 'pointer',
	  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
	  transition: 'background-color 0.3s',
	},
	announcementButtonHover: {
	  backgroundColor: '#6732bb',
	},
	announcementText: {
	  color: '#fff',
	},
  };

  


export default Banner;
