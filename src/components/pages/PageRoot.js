//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";

import {
  SectionHeader
} from "../organisms";

//> CSS
import "./PageRoot.scss";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <SectionHeader/>
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2017-2018 Angelo Petschnig
 */
