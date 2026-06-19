import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's in Computer Science</h4>
                <h5>L.J Institute of Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              CGPA: 7.90/10.00. Focus on software engineering, data structures, algorithms, and full-stack web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>Delta Infosoft - Ahmedabad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assisted in the development of business web applications. Fixed bugs, improved application responsiveness, and worked with React.js, Node.js, MongoDB, and MSSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Delta Infosoft - Ahmedabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and maintained CRM applications. Integrated IndiaMART and Facebook Lead APIs to automate lead capture. Built role-based access control, reporting dashboards, and analytics modules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
