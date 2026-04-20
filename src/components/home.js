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
									<a href="/contacts" className="btn btn-primary btn-lg">
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
