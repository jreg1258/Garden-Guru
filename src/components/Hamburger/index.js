import React, { Component,  BrowserRouter as Router } from "react";
import { MDBNavbar, MDBContainer, MDBNavLink, MDBNavItem, MDBHamburgerToggler, MDBNavbarBrand, MDBNavbarNav,
MDBCollapse } from "mdbreact";
import navLogo from "../../images/Garden-Guru-Transparent-Super-Tiny.png"
import search from "../../images/organic-search-icon.png"
import shovel from"../../images/shovel-icon.png"
import farmer from"../../images/farmer.png"
import Logout from "../Logout"
import './style.css'

class hamburgerMenuPage extends Component {
state = {
  collapse1: ''
}

toggleSingleCollapse = collapseId => () => {
  this.setState({
    [collapseId]: !this.state[collapseId]
  });
};

render(){
  return (
    // <Router>
      <MDBContainer className="hamburger-nav-bar col-md-12">
        <MDBNavbar className="header-nav col-md-12" color="amber lighten-4" style={{ marginTop: '20px' }} light>
          <MDBContainer className="col-md-12">
            <MDBNavbarBrand>
            <MDBNavLink to="/mygarden">
            <img
              alt=""
              src= {navLogo}
              width="40"
              height="30"
              className="gg-logo d-inline-block align-bottom"
            />{' '}
           Garden Guru
           </MDBNavLink>
            </MDBNavbarBrand>
            <MDBHamburgerToggler color="#d3531a" id="hamburger1" onClick={this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar className="dropped">
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="/search">
                              <img
                          alt=""
                          src= {search}
                          width="15"
                          height="15"
                          className="magnify glass d-inline-block align-bottom"
                        />{' '}
                        Search
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">
                  <img
                          alt=""
                          src= {shovel}
                          width="15"
                          height="15"
                          className="magnify glass d-inline-block align-bottom"
                        />{' '}
                    Mantinence</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/logout">
                  <img
                          alt=""
                          src= {farmer}
                          width="15"
                          height="15"
                          className="magnify glass d-inline-block align-bottom"
                        />{' '}
                        Log Out
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    // </Router>
    );
  }
}

export default hamburgerMenuPage;