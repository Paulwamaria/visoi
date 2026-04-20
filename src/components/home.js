import React, {Fragment} from "react";
import ReactPlayer from 'react-player/lazy'
import Posho from "../assets/images/posho.png"
import "../styles/home.css"

class Home extends React.Component {
	render() {
		return (
			<Fragment>
				{/* Hero Section */}
				<section className="hero-section">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
								<h5 className="section-subtitle sofia">Welcome to:</h5>
								<h1 className="hero-title funnyfonts">Visoi Machineries</h1>
								<h5 className="hero-subtitle sofia">Your trusted partner in premium agricultural equipment</h5>
								<p className="hero-description">
									We provide top-quality fabrication, maintenance, and installation services for all your agricultural machinery needs.
								</p>
								<div className="hero-buttons mt-4">
									<a href="/contacts" className="btn-secondary  btn-lg">
										<i className="fa fa-phone mr-2"></i>Get in Touch
									</a>
									<a href="/gallery" className="btn btn-secondary btn-lg">
										<i className="fa fa-images mr-2"></i>View Gallery
									</a>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="hero-image-container">
									<img src={Posho} alt="Posho Mill" className="hero-image"/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Statistics Section */}
				<section className="stats-section section-padding">
					<div className="container">
						<div className="row text-center">
							<div className="col-md-3 col-sm-6 mb-4">
								<div className="stat-item">
									<h2 className="stat-number">15+</h2>
									<p className="stat-label">Years Experience</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 mb-4">
								<div className="stat-item">
									<h2 className="stat-number">500+</h2>
									<p className="stat-label">Machines Delivered</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 mb-4">
								<div className="stat-item">
									<h2 className="stat-number">200+</h2>
									<p className="stat-label">Happy Customers</p>
								</div>
							</div>
							<div className="col-md-3 col-sm-6 mb-4">
								<div className="stat-item">
									<h2 className="stat-number">24/7</h2>
									<p className="stat-label">Support Available</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* About Section */}
				<section className="about-section section-padding">
					<div className="container">
						<div className="section-title">
							<h2 className="funnyfonts">About Us</h2>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="about-content">
									<h3 className="mb-3">Why Choose VISOI Machineries?</h3>
									<p className="mb-3">
										With years of experience in agricultural equipment, we understand your needs and provide solutions that work.
									</p>
									<ul className="services-list">
										<li className="service-item">
											<i className="fa fa-wrench text-primary mr-3"></i>
											<span>Fabrication of new agricultural machines</span>
										</li>
										<li className="service-item">
											<i className="fa fa-tools text-primary mr-3"></i>
											<span>Professional maintenance services</span>
										</li>
										<li className="service-item">
											<i className="fa fa-truck text-primary mr-3"></i>
											<span>Free delivery services</span>
										</li>
										<li className="service-item">
											<i className="fa fa-graduation-cap text-primary mr-3"></i>
											<span>Comprehensive machine usage training</span>
										</li>
										<li className="service-item">
											<i className="fa fa-check-circle text-primary mr-3"></i>
											<span>Free professional installation</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="about-video">
									<ReactPlayer 
										className='react-player' 
										url='https://www.youtube.com/shorts/thDHihzx3hA' 
										width='100%' 
										height='100%' 
										controls
										light={true}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="benefits-section section-padding">
					<div className="container">
						<div className="section-title text-center mb-5">
							<h2 className="funnyfonts">Why Choose Visoi Machineries?</h2>
						</div>
						<div className="row">
							<div className="col-lg-4 mb-4">
								<div className="benefit-card text-center">
									<div className="benefit-icon">
										<i className="fa fa-shield text-primary"></i>
									</div>
									<h4>Quality Guaranteed</h4>
									<p>All our machines come with comprehensive warranty and quality assurance.</p>
								</div>
							</div>
							<div className="col-lg-4 mb-4">
								<div className="benefit-card text-center">
									<div className="benefit-icon">
										<i className="fa fa-clock-o text-primary"></i>
									</div>
									<h4>Fast Delivery</h4>
									<p>Quick turnaround times with reliable delivery across Kenya.</p>
								</div>
							</div>
							<div className="col-lg-4 mb-4">
								<div className="benefit-card text-center">
									<div className="benefit-icon">
										<i className="fa fa-users text-primary"></i>
									</div>
									<h4>Expert Support</h4>
									<p>Professional installation, training, and ongoing maintenance support.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="process-section section-padding bg-light">
					<div className="container">
						<div className="section-title text-center mb-5">
							<h2 className="funnyfonts">How It Works</h2>
							<p>Simple process from inquiry to installation</p>
						</div>
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="process-step text-center">
									<div className="step-number">1</div>
									<h4>Contact Us</h4>
									<p>Get in touch with your requirements</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="process-step text-center">
									<div className="step-number">2</div>
									<h4>Consultation</h4>
									<p>We assess your needs and provide recommendations</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="process-step text-center">
									<div className="step-number">3</div>
									<h4>Delivery & Installation</h4>
									<p>Professional delivery and setup</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 mb-4">
								<div className="process-step text-center">
									<div className="step-number">4</div>
									<h4>Training & Support</h4>
									<p>Complete training and ongoing support</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="cta-section">
					<div className="container text-center">
						<h2 className="cta-title funnyfonts mb-4">Ready to Get Started?</h2>
						<p className="cta-subtitle mb-5">
							Contact us today for quotations, enquiries, or any consultation
						</p>
						<div className="cta-buttons">
							<a href="tel:0712550433" className="btn btn-lg btn-cta-primary">
								<i className="fa fa-phone mr-2"></i>Call: 0712 550 433
							</a>
									<a href="mailto:mburujoseph383@gmail.com" className="btn btn-lg btn-cta-secondary">
								<i className="fa fa-envelope-o mr-2"></i>Email Us
							</a>
							<a href="https://wa.me/254712550433" className="btn btn-lg btn-cta-whatsapp" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-whatsapp mr-2"></i>WhatsApp
							</a>
						</div>
					</div>
				</section>

				{/* WhatsApp Floating Button */}
				<a href="https://wa.me/254712550433" className="whatsapp_float" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp">
					<i className="fa fa-whatsapp whatsapp-icon"></i>
				</a>
			</Fragment>
		);
	}
}

export default Home;
