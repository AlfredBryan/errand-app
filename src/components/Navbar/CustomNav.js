import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const CustomNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="custom_nav"
        color="light"
        light
        expand="md"
        fixed="top"
      >
        <NavbarBrand href="/">LOGO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="nav_items">
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem className="nav_items">
              <Link to="/services">Services</Link>
            </NavItem>
            <NavItem className="nav_items">
              <Link to="/about_us">About Us</Link>
            </NavItem>
            <NavItem className="nav_items">
              <Link to="/contact_us">Contact Us</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNav;
