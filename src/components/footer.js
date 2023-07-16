import React from "react"
import {MDBCol,MDBContainer,MDBRow,MDBFooter} from 'mdbreact'
import smChopper from "../assets/images/smallchopper.jpg"
import bgChopper from "../assets/images/bigchopper.jpg"
import sheller from "../assets/images/sheller1.jpeg"
import chuffCutter from "../assets/images/chaffcutter.jpg"
import chuff from "../assets/images/chaff2.jpg"
import happyClient from "../assets/images/capture1.jpg"
import double from "../assets/gallery/combined/double.jpg"

const Footer = ()=>{
    return (<MDBFooter className="font-small bg-primary text-white">
        <MDBContainer fluid className="text-center text-md-left">
            <h6 className="sofia">Available Machines</h6>
            <MDBRow>
                <MDBCol md="2">
                    <div className="tinyDiv">
                        <img className="img-responsive mt-2 tinyImage" src={chuff} />
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="tinyDiv">
                        <img className="img-responsive mt-2 tinyImage" src={double} />
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="tinyDiv">
                        <img className="img-responsive mt-2 tinyImage" src={bgChopper} />
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="tinyDiv">
                        <img className="img-responsive mt-2 tinyImage" src={chuffCutter} />
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="tinyDiv">
                        <img className="img-responsive mt-2 tinyImage" src={smChopper} />
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="tinyDiv">
                        <img className="img-responsive mt-2 tinyImage" src={happyClient} />
                    </div>
                </MDBCol>
            </MDBRow>

        </MDBContainer>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="sofia">
          &copy; {new Date().getFullYear()} Copyright: Visoi Machineries Services{" "}
          
        </MDBContainer>
      </div>
    </MDBFooter>)
}
export default Footer