
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">

      <Container fluid id = "header">
        
        <Menu fluid size="huge" pointing stackable secondary id="menu" borderless>
          <Menu.Item
            name=""
            as={Link}
            to="/"
            header
            id = "menuname"
          >
          Cindy Qu
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item
              name="Resume"
              as={Link} to="/resume"
              className = "menulinks"
            />
            <Menu.Item
              name="About"
              as={Link} to="/about"
              className = "menulinks"
            />
            <Menu.Item
              name="work"
              as={Link} to="/mywork"
              className = "menulinks"
            />
            <Menu.Item
              name="Contact"
              as={Link} to="/contact"
              className = "menulinks"
            />   
                     
          </Menu.Menu>
        </Menu>
        
      </Container>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/about" element={<AboutMe/>}></Route>
        <Route path="/mywork" element={<MyWork/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
