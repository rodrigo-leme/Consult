import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import logo from './emperor.jpg';  

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 1rem;
`;

const Logo = styled.img`
  max-width: 250px;
  height: auto;
  margin-bottom: 1rem;
`;

const Nav = styled.nav`
  background-color: #34495e;
  padding: 0.5rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          {<Logo src={logo} alt="FinanciaMais Consultoria Logo" /> }
          <h1>Emperor Consulting</h1>
        </Header>
        <Nav>
          <NavList>
            <NavItem><NavLink to="/">Home</NavLink></NavItem>
            <NavItem><NavLink to="/services">Serviços</NavLink></NavItem>
            <NavItem><NavLink to="/about">Sobre Nós</NavLink></NavItem>
            <NavItem><NavLink to="/contact">Contato</NavLink></NavItem>
          </NavList>
        </Nav>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer>
          <p>&copy; 2025 Emperor Consulting - Consultoria. Todos os direitos reservados.</p>
        </Footer>
      </AppContainer>
    </Router>
  );
}

export default App;
