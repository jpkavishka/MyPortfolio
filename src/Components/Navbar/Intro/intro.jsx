import React,{ useContext } from 'react'
import './intro.css'
import Github from '../../../img/github.png';
import LinkedIn from '../../../img/linkedin.png'
import instagram from '../../../img/instagram.png'
import vector1 from '../../../img/Vector1.png'
import vector2 from '../../../img/Vector2.png'
import boy from '../../../img/boy.png'
import thumbsup from '../../../img/thumbup.png'
import crown from '../../../img/crown.png'
import { themeContext } from "../../../Context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import glassesimoji from '../../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';



function Intro() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className='i-left'>
           <div className="i-name">
             <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am </span>
             <span>KAVISHKA </span>
             <span>Frontend Developer 
                with good fluency in english 
                to handle the customers and 
                develop an webpage which satisfies them.
                Good at Programme solving technique in C and JAVA.</span>
           </div>
           <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
          </Link>
           
                <div className="i-icons">
                    <a href='https://github.com/jpkavishka'>
                        <img src={Github} alt=""/>
                    </a>
                    <a href='https://www.linkedin.com/in/kavishka-j-p-47a38b220/'>
                        <img src={LinkedIn} alt=""/>
                    </a>
                    <a href=''>
                        <img src={instagram} alt=""/>
                    </a>
                </div>
       
        </div>
        <div className='i-right'>
             <img src={vector1} alt=''/>
             <img src={vector2} alt=''/>
             <img src={boy} alt=''/>
             <motion.img
                initial={{ left: "-30%" }}
                whileInView={{ left: "-20%" }}
                transition={transition}
                src={glassesimoji}
                alt=""
             />
              <motion.div
                  initial={{ top: "-4%", left: "74%" }}
                  whileInView={{ left: "68%" }}
                  transition={transition}
                  className="floating-div"
              >

             <div style={{ color: darkMode ? "white" : "" }}>
              <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
             </div>
             </motion.div>

             <motion.div
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                className="floating-div"
                >
             <div>
              <FloatingDiv image={thumbsup} txt1='Intercollege Coding Contest' txt2='Price'/>
             </div>
             </motion.div>
             {/*blur div */}
             <div className='blur' style={{ background: "rgba(238, 210, 255)" }}></div>
             <div className='blur' style={{background: '#C1F5FF',top: '17rem',width: '21rem', height: '11rem', left:'-9rem'}}></div>
        </div>
    </div>
  );
};

export default Intro