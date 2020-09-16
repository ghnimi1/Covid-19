import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Navbarr = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="primary" light expand="md">
        <div className="container">
          <NavbarBrand href="/Covid-19"><img src='https://icon-icons.com/icons2/2244/PNG/32/coronavirus_corona_virus_genome_covid_covid_icon_134897.png' /> Corona virus</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className='nav-link' to="Covid-19"><span className='fa fa-home fa-lg'> Home</span></NavLink>
              </NavItem>
              <NavItem >
                <NavLink className='nav-link' to="/coronavirus"><span className='fa fa-info fa-lg'> Covid-19?</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/about"><span className='fa fa-address-card fa-lg'> About Us</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to="/prevention"><span className='fa fa-hand-paper-o fa-lg'> Prevention</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <div>
      
    </div>
    </div>
  );
}

export default Navbarr;