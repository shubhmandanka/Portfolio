import { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Works from './Components/Works/Works';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={
      {
        background : darkMode? "black" : "",
        color: darkMode? "white" : "",
       }
    }>
      <Navbar />
      <Intro />
      <Education />
      <Experience />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
