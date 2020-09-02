//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBContainer,
} from "mdbreact";

//> css
import './navbar.scss';


class Navbar extends React.Component{
    state = {
        collapseID: ""
    };

    toggleCollapse = (collapseID) => () =>
        this.setState((prevState) => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    closeCollapse = (collapseID) => () => {
        window.scrollTo(0, 0);
        this.state.collapseID === collapseID && this.setState({ collapseID: "" });
    };

    render(){
        const overlay = (
        <div
            id="sidenav-overlay"
            style={{ backgroundColor: "transparent" }}
            onClick={this.toggleCollapse("mainNavbarCollapse")}
        />
        );

        const { collapseID } = this.state;
        return(
            <div class="navbartext">
                <MDBNavbar color="rgba-black-strong" light expand="md" fixed="top" scrolling>

                <MDBContainer>
                    <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
                    <div class="navbartext">
                        <strong className="white-text align-middle"> Kagaya</strong>
                        <strong className="white-text align-middle"> About me</strong>
                        <strong className="white-text align-middle"> Works</strong>
                        <strong className="white-text align-middle"> Contact</strong>
                    </div>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                    onClick={this.toggleCollapse("mainNavbarCollapse")}
                    />
                    <MDBCollapse
                        id="mainNavbarCollapse"
                        isOpen={this.state.collapseID}
                        navbar
                        >
                    </MDBCollapse>
                </MDBContainer>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link white-text" href="https://www.reddit.com/user/Shinacchi/">
                                    <i class="fab fa-reddit fa-lg orange-text"></i> Reddit
                                    <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link white-text" href="https://twitter.com/kagayamicchi?lang=de">
                                    <i class="fab fa-twitter fa-lg cyan-text"></i> Twitter</a>
                                </li>
                            </ul>
                        </div>
                        </MDBNavItem>
                    </MDBNavbarNav>
            </MDBNavbar>
            {collapseID && overlay}
            </div>
        );
    }
}

export default Navbar;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2017-2018 Angelo Petschnig
 */
