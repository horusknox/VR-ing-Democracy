import React from "react";

const customQuestLocation = () => {
  return (
    <div className="container mt-5">
      {/* Announcement Section */}
      <div className="announcement mb-5 text-center">
        <h3 className="text-primary fw-bold mb-3">Check this out</h3>
        <p className="text-muted mb-3">
          Check out the latest announcement from LWVSF on their official page!
        </p>
        <a
          href="https://x.com/LWVSF/status/1839370736194257188?prefetchTimestamp=1732322037947"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Announcement
        </a>
      </div>

      <h2 className="text-center mb-5">Event Timeline</h2>

      {/* Timeline wrapper */}
      <div className="timeline d-flex flex-column" style={{ position: "relative" }}>
        {/* Card 1 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Tuesday, Sep 24</h5>
              <p className="text-muted mb-0">
                Latino vote panel discussion with Acción Latino, 6-8pm @ KALW
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Wednesday, Sep 25</h5>
              <p className="text-muted mb-0">
                Commission on the Status of Women, 5-7pm @ City Hall
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Friday, Sep 27</h5>
              <p className="text-muted mb-0">
                Youth Civic Engagement forum with LWVSF & NCNW, 2-5pm @ SF City Hall
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Monday, Sep 30</h5>
              <p className="text-muted mb-0">
                San Francisco Mayor Candidate Forum with LWVSF, 6-8pm @ UCSF Mission Bay Conference Center
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Sunday, Oct 20</h5>
              <p className="text-muted mb-0">
                Presentation at SF Girl Scout's Entrepreneurship/Civic Engagement Summit, 3-4pm
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Monday, Oct 21</h5>
              <p className="text-muted mb-0">
                Youth Civic Engagement Panel with Warriors, KQED, and Senator Weber, 5-7pm @ Chase Center
              </p>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Saturday, Oct 26</h5>
              <p className="text-muted mb-0">
                SFPL Parkside Public Library, 3:30-4:30pm
              </p>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="card mb-4">
          <div className="card-body d-flex flex-column flex-md-row align-items-center">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "15px",
                color: "white",
              }}
            >
              <i className="bi bi-calendar"></i>
            </div>
            <div>
              <h5 className="fw-bold mb-1">Tuesday, Oct 29</h5>
              <p className="text-muted mb-0">
                Youth Power Listening Party - Teen changemakers speak out about the upcoming election, 5-8pm @ KALW Public Media
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customQuestLocation;
