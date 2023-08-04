import React from "react";
import './FooterComp.css'

const FooterComp = () => {
  return (
    <>
      <div className="footer">
        <div className="social-links">
          <ul className="social-ul">
            <li>FaceBook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className="project-list">
          <ol className="project-ol">
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
