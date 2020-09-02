import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from 'mdbreact';

//> Images
import logoblack from "../../../assets/logo.svg";
import logowhite from "../../../assets/logo3.svg";

//> css
import './header.scss';

class SectionHeader extends React.Component {
  render() {
    return (
      <div id='header'>
        <MDBView className="purple-gradient">
          <MDBMask className='rgba-black-slight ' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-left'>
                
                <div class="imageBox">
                  <div class="imageInn">
                    <img
                      className="img-fluid"
                      src={logoblack}
                      alt=""
                      width="500px"
                    />
                  </div>

                  <div class="hoverImg">
                    <img
                      className="img-fluid"
                      src={logowhite}
                      alt=""
                      width="500px"
                    />
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default SectionHeader;
