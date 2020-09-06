import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

//> css
import './about.scss';

//> Images
import banner from "../../../assets/Mashu_faceit_banner.png";
import cross from "../../../assets/cross.gif";

const SectionAbout = () => {
  return (
    <section className="my-5">
        <h2 class="header">
          About me
        </h2>
          <MDBRow>
            <MDBCol size="4">
              <div class="aboutcolumn">
                  <img class="picture" src={cross}/>
              </div>
            </MDBCol>
            <MDBCol className="purple-gradient text-white" size="8">
              <div class="aboutcolumn">
                <div class="text">
                  Kagaya is an ongoing Motion and Graphic designer who is doing different types of edits in his freetime
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        
        <img className="banner" src={banner} alt=""  width="500px" />
    </section>
  );
}

export default SectionAbout;