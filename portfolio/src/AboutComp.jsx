import React from "react";
import NavbarComp from "./NavbarComp";
import "./AboutComp.css";

const AboutComp = () => {
  return (
    <>
      <NavbarComp />
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">About Me,</h2>
          <p className="card-text">
            Dedicated and highly motivated Java Fresher with a solid foundation
            in core and advanced Java programming, as well as proficiency in
            modern web development technologies. I am a certified Java Full
            Stack Developer, equipped with hands-on experience in building
            applications using Spring Boot and Hibernate frameworks. Proficient
            in front-end technologies such as HTML, CSS, and JavaScript, with
            expertise in ReactJS for creating dynamic user interfaces. Adept at
            version control using GitBash and experienced in working with MySQL
            databases. Strong problem-solving skills and a keen aptitude for
            learning new technologies, combined with a collaborative and
            adaptable approach to team projects. Seeking opportunities to
            leverage my skills and contribute to innovative software solutions
            in a dynamic and growth-oriented environment.
          </p>
        </div>
      </div>
      <h2 style={{ margin: "20px", color: "white" }}>
        Programming Languages/Frameworks
      </h2>
      <div className="div1" style={{ display: "flex" }}>
        <ul style={{ margin: "20px", color: "white",width:'800px' }}>
          <li>Core Java</li>
          <li>Advanced Java</li>
          <li>SQL</li>
          <li>Python</li>
          <li>Django</li>
          <li>Hibernate</li>
          <li>Spring Boot</li>
          <li>React</li>
          <li>NodeJs</li>
          <li>Git</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <div className="card" style={{ width: "30rem", marginRight:'0px'}}>
          <img
            src={require("./images/DSC_0108.JPG")}
            className="card-img-top"
          />
        </div>
      </div>
    </>
  );
};

export default AboutComp;
