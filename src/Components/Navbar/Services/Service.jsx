import React, { useContext } from "react";
import './Service.css'
import HeartEmoji from "../../../img/heartemoji.png"
import Glasses from "../../../img/glasses.png"
import humble from "../../../img/humble.png"
import Card from '../Card/card';
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import Resume from './Kavishka.pdf';
function Service() {
  const transition = {
    duration: 1,
    type: "spring",
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>
                Served as an active Volunteer in NSS and 
                <br/>
                played a role as Co-Advisor in IT Association
            </span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
             <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
    
        <div className="cards">
              <motion.div
                initial={{ left: "40rem" }}
                whileInView={{ left: "20rem" }}
                transition={transition}
              >
              <div>
                <Card image={HeartEmoji} heading='Design' detail='Adobe XD, Photoshop'/>
              </div>
              </motion.div>
              <motion.div
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "1rem" }}
                transition={transition}
              >
              <div>
                <Card image={Glasses} heading='Web Designing' detail='HTML, CSS, JavaScript, React, Angular,PHP'/>
              </div>
              </motion.div>
              <motion.div
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "20rem" }}
                transition={transition}
              >
              <div>
                <Card image={humble} heading='Programming Language' detail='C, JAVA'/>
              </div>
              </motion.div>
              <div className='blur s-blur2' style={{background: "var(--purple"}}></div>
              
        </div>
    </div>
  )
}

export default Service
