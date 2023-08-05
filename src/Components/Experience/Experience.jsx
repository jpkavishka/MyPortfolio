import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './Experience.css'
function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
    <div className="acheivement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2</div>
        <span>Internship</span>
        <span>Completed</span>
    </div>
    <div className="acheivement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span>Projects</span>
        <span>Completed</span>
    </div>
    <div className="acheivement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span>Certifications</span>
        <span>Completed</span>
    </div>
    </div>
  )
}

export default Experience