import React from "react"
import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import smChopper from "../assets/images/smallchopper.jpg"
import bgChopper from "../assets/images/bigchopper.jpg"
import chuffCutter from "../assets/images/chaffcutter.jpg"
import chuff from "../assets/gallery/combined/double.jpg"
import happyClient from "../assets/images/capture1.jpg"
import double from "../assets/gallery/combined/double.jpg"
import "../styles/footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-professional">
            {/* Footer Main Content */}
            <MDBContainer fluid className="footer-content">
                <MDBRow className="py-5">
                    {/* Company Info */}
                    <MDBCol md="4" className="mb-4 mb-md-0">
                        <div className="footer-section">
                            <h5 className="footer-section-title">
                                <i className="fa fa-cog mr-2"></i>VISOI MACHINERIES
                            </h5>
                            <p className="footer-description">
                                Leading provider of premium agricultural machinery, maintenance, and fabrication services in Nakuru.
                            </p>
                            <div className="footer-contact-quick">
                                <p className="mb-2">
                                    <i className="fa fa-phone text-primary mr-2"></i>
                                    <a href="tel:0712550433">0712 550 433</a>
                                </p>
                                <p className="mb-0">
                                    <i className="fa fa-envelope text-primary mr-2"></i>
                                    <a href="mailto:mburujoseph383@gmail.com">mburujoseph383@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </MDBCol>

                    {/* Quick Links */}
                    <MDBCol md="4" className="mb-4 mb-md-0">
                        <div className="footer-section">
                            <h5 className="footer-section-title">
                                <i className="fa fa-link mr-2"></i>Quick Links
                            </h5>
                            <ul className="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                                <li><a href="/contacts">Contact Us</a></li>
                                <li><a href="https://wa.me/254712550433">WhatsApp Chat</a></li>
                            </ul>
                        </div>
                    </MDBCol>

                    {/* Follow Us */}
                    <MDBCol md="4">
                        <div className="footer-section">
                            <h5 className="footer-section-title">
                                <i className="fa fa-share-alt mr-2"></i>Follow Us
                            </h5>
                            <div className="footer-social-links">
                                <a href="https://youtube.com/@josephmburu9101" title="YouTube" className="social-link-footer">
                                    <i className="fa fa-youtube-play"></i>
                                </a>
                                <a href="https://web.facebook.com/profile.php?id=100064125221186" title="Facebook" className="social-link-footer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a href="https://instagram.com/josephmburungethe?igshid=ZDc4ODBmNjlmNQ==" title="Instagram" className="social-link-footer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a href="https://wa.me/254712550433" title="WhatsApp" className="social-link-footer">
                                    <i className="fa fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>

                {/* Divider */}
                <hr className="footer-divider" />

                {/* Featured Machines */}
                <div className="featured-machines">
                    <h5 className="featured-title text-center mb-4">
                        <i className="fa fa-wrench mr-2"></i>Featured Machines
                    </h5>
                    <MDBRow className="machines-gallery">
                        <MDBCol md="2" sm="4" xs="6" className="mb-3">
                            <div className="machine-thumb">
                                <img className="img-responsive machine-image" src={chuff} alt="Chaff Cutter" />
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="4" xs="6" className="mb-3">
                            <div className="machine-thumb">
                                <img className="img-responsive machine-image" src={double} alt="Double Mill" />
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="4" xs="6" className="mb-3">
                            <div className="machine-thumb">
                                <img className="img-responsive machine-image" src={bgChopper} alt="Big Chopper" />
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="4" xs="6" className="mb-3">
                            <div className="machine-thumb">
                                <img className="img-responsive machine-image" src={chuffCutter} alt="Chaff Cutter" />
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="4" xs="6" className="mb-3">
                            <div className="machine-thumb">
                                <img className="img-responsive machine-image" src={smChopper} alt="Small Chopper" />
                            </div>
                        </MDBCol>
                        <MDBCol md="2" sm="4" xs="6" className="mb-3">
                            <div className="machine-thumb">
                                <img className="img-responsive machine-image" src={happyClient} alt="Happy Client" />
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="6" className="text-center text-md-left">
                            <p className="footer-copyright">
                                &copy; {currentYear} <strong>Visoi Machineries Services</strong>. All rights reserved.
                            </p>
                        </MDBCol>
                        <MDBCol md="6" className="text-center text-md-right">
                            <p className="footer-credit">
                                Crafted with <i className="fa fa-heart text-danger"></i> for quality
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </footer>
    );
};

export default Footer