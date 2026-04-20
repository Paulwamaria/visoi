import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import catalogue from "../assets/gallery/combined/catalogue.png"
import avatar from "../assets/gallery/combined/avatar01.jpg"
import "../styles/contacts.css"

class Contacts extends React.Component {
	render() {
		return (
			<div className="contacts-page">
				{/* Header Section */}
				<section className="contacts-header">
					<Container>
						<h1 className="header-title funnyfonts">Get In Touch</h1>
						<p className="header-subtitle sofia">
							We'd love to hear from you! Reach out with any enquiries, quotations, or consultations.
						</p>
					</Container>
				</section>

				{/* Contact Cards Section */}
				<section className="contacts-content section-padding">
					<Container>
						<Row className="mb-5">
							{/* Contact Information */}
							<Col lg="4" md="6" className="mb-4">
								<Card className="contact-card">
									<div className="card-icon">
										<i className="fa fa-envelope"></i>
									</div>
									<Card.Body>
										<h4 className="card-title">Contact Information</h4>
										<div className="contact-item">
											<i className="fa fa-phone text-primary mr-3"></i>
											<div>
												<p className="label">Phone</p>
												<a href="tel:0712550433" className="value">
													+254 712 550 433
												</a>
											</div>
										</div>
										<div className="contact-item">
											<i className="fa fa-envelope text-primary mr-3"></i>
											<div>
												<p className="label">Email</p>
												<a href="mailto:mburujoseph383@gmail.com" className="value">
													mburujoseph383@gmail.com
												</a>
											</div>
										</div>
										<div className="contact-item">
											<i className="fa fa-map-marker text-primary mr-3"></i>
											<div>
												<p className="label">Location</p>
												<p className="value">Nakuru, Kenya</p>
											</div>
										</div>
									</Card.Body>
								</Card>
							</Col>

							{/* Social Media */}
							<Col lg="4" md="6" className="mb-4">
								<Card className="contact-card">
									<div className="card-icon">
										<i className="fa fa-share-alt"></i>
									</div>
									<Card.Body>
										<h4 className="card-title">Follow Us</h4>
										<p className="card-description">Connect with us on social media</p>
										<div className="social-buttons">
											<a href="https://web.facebook.com/profile.php?id=100064125221186" 
												className="social-btn facebook" title="Facebook">
												<i className="fa fa-facebook"></i>
												<span>Facebook</span>
											</a>
											<a href="https://instagram.com/josephmburungethe?igshid=ZDc4ODBmNjlmNQ==" 
												className="social-btn instagram" title="Instagram">
												<i className="fa fa-instagram"></i>
												<span>Instagram</span>
											</a>
											<a href="https://youtube.com/@josephmburu9101" 
												className="social-btn youtube" title="YouTube">
												<i className="fa fa-youtube-play"></i>
												<span>YouTube</span>
											</a>
											<a href="https://wa.me/254712550433" 
												className="social-btn whatsapp" title="WhatsApp" target="_blank" rel="noopener noreferrer">
												<i className="fa fa-whatsapp"></i>
												<span>WhatsApp</span>
											</a>
										</div>
									</Card.Body>
								</Card>
							</Col>

							{/* Quick Actions */}
							<Col lg="4" md="6" className="mb-4">
								<Card className="contact-card">
									<div className="card-icon">
										<i className="fa fa-bolt"></i>
									</div>
									<Card.Body>
										<h4 className="card-title">Quick Actions</h4>
										<div className="action-buttons">
											<a href="tel:0712550433" className="action-btn call-btn">
												<i className="fa fa-phone mr-2"></i>Call Now
											</a>
											<a href="mailto:mburujoseph383@gmail.com" className="action-btn email-btn">
												<i className="fa fa-envelope-o mr-2"></i>Send Email
											</a>
											<a href="https://wa.me/254712550433" className="action-btn whatsapp-btn" 
												target="_blank" rel="noopener noreferrer">
												<i className="fa fa-whatsapp mr-2"></i>WhatsApp Chat
											</a>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>

						<hr className="my-5" />

						{/* Profile & Catalog Section */}
						<Row>
							{/* Team Member */}
							<Col lg="4" md="6" className="mb-4">
								<Card className="team-card">
									<div className="team-image">
										<img src={avatar} alt="Joseph Mburu" className="team-photo" />
									</div>
									<Card.Body className="text-center">
										<h4 className="team-name funnyfonts">Joseph Mburu</h4>
										<p className="team-position sofia">Chief Engineer & Founder</p>
										<p className="team-bio">
											With years of expertise in agricultural machinery fabrication and maintenance.
										</p>
										<div className="team-contact-links">
											<a href="tel:0712550433" className="team-link">
												<i className="fa fa-phone"></i>
											</a>
												<a href="mailto:mburujoseph383@gmail.com" className="team-link">
												<i className="fa fa-envelope-o"></i>
											</a>
											<a href="https://wa.me/254712550433" className="team-link">
												<i className="fa fa-whatsapp"></i>
											</a>
										</div>
									</Card.Body>
								</Card>
							</Col>

							{/* Catalogue Download */}
							<Col lg="4" md="6" className="mb-4">
								<Card className="catalogue-card">
									<div className="catalogue-image">
										<img src={catalogue} alt="Product Catalogue" className="catalogue-photo" />
									</div>
									<Card.Body className="text-center">
										<h4 className="catalogue-title funnyfonts">Product Catalogue</h4>
										<p className="catalogue-description">
											Browse our complete range of agricultural machinery and services
										</p>
										<button className="btn btn-download">
											<i className="fa fa-download mr-2"></i>Download Catalogue
										</button>
									</Card.Body>
								</Card>
							</Col>

							{/* Business Hours */}
							<Col lg="4" md="6" className="mb-4">
								<Card className="hours-card">
									<div className="card-icon">
										<i className="fa fa-clock-o"></i>
									</div>
									<Card.Body>
										<h4 className="card-title">Business Hours</h4>
										<div className="hours-list">
											<div className="hour-item">
												<span className="day">Monday - Friday:</span>
												<span className="time">8:00 AM - 5:00 PM</span>
											</div>
											<div className="hour-item">
												<span className="day">Saturday:</span>
												<span className="time">9:00 AM - 3:00 PM</span>
											</div>
											<div className="hour-item">
												<span className="day">Sunday:</span>
												<span className="time">Closed</span>
											</div>
										</div>
										<p className="hours-note">
											<i className="fa fa-info-circle mr-2"></i>
											Available for emergencies
										</p>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>

				{/* WhatsApp Floating Button */}
				<a href="https://wa.me/254712550433" className="whatsapp_float" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp">
					<i className="fa fa-whatsapp whatsapp-icon"></i>
				</a>
			</div>
		)
	}
}
export default Contacts
