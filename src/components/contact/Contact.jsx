import "./contact.css";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-bg-r"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title-left">My Language Skills</h1>
          <div className="c-info">
            <div className="c-info-item">
              <b className="c-info-item-title">🚪 Front-End</b>React JS,
              Next.js, HTML, CSS, Sass, Bootstrap, Tailwind, Photoshop{" "}
            </div>
            <div className="c-info-item">
              <b className="c-info-item-title">🔙 Back-End</b> Node.js, Express
              JS, RESTful API, MVC, PostgreSQL, MongoDB
            </div>
            <div className="c-info-item">
              <b className="c-info-item-title">🩷 Other</b>TDD, Object Oriented
              Programming principles, Git
            </div>
          </div>
        </div>
        <div className="c-right">
          <h1 className="c-title">How I've Learned</h1>
          <div className="c-info">
            <div className="c-info-item">
              <b className="c-info-item-title-right">🏫</b>
              Completed Northcoders Bootcamp course from 2022 July to 2022
              October
            </div>
            <div className="c-info-item">
              <b className="c-info-item-title-right">💻</b>
              Did my own projects mostly using React JS, PSQL, HTML, Custom CSS.
            </div>
            <div className="c-info-item">
              <b className="c-info-item-title-right">⏺️</b>
              Cloned the sites - Social Media site, OTT site, Chat app, Map app,
              E-commerce, Blog, Order app
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
