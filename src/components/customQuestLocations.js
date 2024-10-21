import React from "react";

const customQuestLocation = () => {
  return (
    <div className="container mt-5">
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

        {/* New Card for Commission on the Status of Women */}
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
              <h5 className="fw-bold mb-1">Friday, Sep 27</h5>
              <p className="text-muted mb-0">
                Youth Civic Engagement forum with LWVSF & NCNW, 2-5pm @ SF City Hall
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
              <h5 className="fw-bold mb-1">Monday, Sep 30</h5>
              <p className="text-muted mb-0">
                San Francisco Mayor Candidate Forum with LWVSF, 6-8pm @ UCSF Mission Bay Conference Center
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
              <h5 className="fw-bold mb-1">Saturday, October 26</h5>
              <p className="text-muted mb-0">
                SFPL Parkside Public Library, 3:30-4:30pm
              </p>
            </div>
          </div>
        </div>

        {/* New Card for Oct 20 VR democracy presentation */}
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
      </div>
    </div>
  );
};

export default customQuestLocation;
