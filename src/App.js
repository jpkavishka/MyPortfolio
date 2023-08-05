import Navbar from "./Components/Navbar/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/intro";
import Services from "./Components/Navbar/Services/Service";
import Experience from "./Components/Experience/Experience"
import Contact from "./Components/contact/contact"
import Footer from "./Components/Footer/Footer"
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode? 'black':'',
        color: darkMode? 'white':''
      }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App; 
