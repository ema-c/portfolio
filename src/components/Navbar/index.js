import React from "react";
import { FaBars } from "react-icons/fa";
//import {  } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavLinks
} from "./NavbarElements";
//import { Link as LinkRouter } from "react-router-dom";

const Navbar = ({ toggle }) => {
  /**destructure */
  //2.18
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">EC</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About Me</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="services">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/signup">Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

//add as dependency:react-dom, react-scroll, react-icons, react-router-dom, styled-components
