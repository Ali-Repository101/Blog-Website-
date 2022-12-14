import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
  MDBNavbarLink,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
const NavbarSection = () => {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">Blog Website</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <NavLink aria-current="page" to="/">
                <MDBNavbarLink> Home</MDBNavbarLink>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="about">
                <MDBNavbarLink> About</MDBNavbarLink>
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="contact">
                <MDBNavbarLink> Contact</MDBNavbarLink>
              </NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <MDBBtnGroup>
            <NavLink to="login">
              <MDBBtn color="success" size="sm" className="gap-2">
                Login
              </MDBBtn>
            </NavLink>
            |<NavLink to="signup">
              <MDBBtn color="danger"  size="sm" className="gap-2">
                SignUp
              </MDBBtn>
            </NavLink>
          </MDBBtnGroup>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavbarSection;
