import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import poshoCollection from "../assets/images/poshoCollection.jpg";
import capture1 from "../assets/images/capture1.jpg";
import bgMixer from "../assets/images/bigSheller.jpg";
import bigChopper from "../assets/images/bigchopper.jpg";
import chaff2 from "../assets/images/chaff2.jpg";
import smChopper from "../assets/images/smallchopper.jpg";
import sheller from "../assets/images/sheller1.jpeg"
import carpetDrier from "../assets/images/carpetDrier.jpg";
import "../styles/carousel.css"

const CarouselPage = () => {
	const machines = [
		{
			id: 1,
			name: "Poshomills",
			image: poshoCollection,
			description: "We have a variety of poshomills ranging from small to large. They also run on different engines such as single phase electric motor, three phase electric motor, diesel engine or a combination of motor and engine.",
			features: ["Various sizes", "Multiple engine options", "Durable construction"]
		},
		{
			id: 2,
			name: "Chaff Cutter",
			image: chaff2,
			description: "Professional chaff cutting machinery designed for efficient farm operations. Perfect for livestock feeding and agricultural processing.",
			features: ["Efficient cutting", "Durable blades", "Easy operation"]
		},
		{
			id: 3,
			name: "Small Chopper",
			image: smChopper,
			description: "Compact and portable chopping machine for small to medium farm operations. Ideal for silage preparation and animal feed processing.",
			features: ["Portable design", "Powerful motor", "Safety features"]
		},
		{
			id: 4,
			name: "Large Chopper",
			image: bigChopper,
			description: "Heavy-duty chopping machine for large-scale agricultural operations. Built for maximum efficiency and durability.",
			features: ["Industrial strength", "High capacity", "Reliable performance"]
		},
		{
			id: 5,
			name: "Mixer",
			image: bgMixer,
			description: "Professional mixing machine for animal feed and agricultural products. Ensures uniform mixing for quality results.",
			features: ["Uniform mixing", "Large capacity", "Easy loading"]
		},
		{
			id: 6,
			name: "Maize Huller",
			image: capture1,
			description: "Specialized equipment for maize processing. Efficiently removes husks and prepares maize for further processing.",
			features: ["High efficiency", "Reduced waste", "Quick processing"]
		},
		{
			id: 7,
			name: "Sheller",
			image: sheller,
			description: "Professional grain shelling machine for rapid and efficient removal of grain from husks. Perfect for commercial operations.",
			features: ["Rapid operation", "High capacity", "Durable construction"]
		},
		{
			id: 8,
			name: "Carpet Drier",
			image: carpetDrier,
			description: "Professional carpet drying equipment designed for efficient moisture removal and carpet restoration. Perfect for cleaning services and restoration projects.",
			features: ["Fast drying", "Professional grade", "Easy to use"]
		}
	];

	return (
		<div className="carousel-page">
			{/* Main Carousel */}
			<div className="carousel-section">
				<Carousel className="gallery-carousel" controls indicators interval={4000}>
					{machines.map((machine) => (
						<Carousel.Item key={machine.id}>
							<div className="carousel-image-wrapper">
								<img
									className="d-block w-100"
									src={machine.image}
									alt={machine.name}
								/>
								<div className="carousel-overlay"></div>
							</div>
							<Carousel.Caption>
								<div className="carousel-caption-content">
									<h2 className="carousel-title funnyfonts">{machine.name}</h2>
									<p className="carousel-description">{machine.description}</p>
									<a href="tel:0712550433" className="btn btn-carousel-primary">
										<i className="fa fa-phone mr-2"></i>Inquire Now
									</a>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			</div>

			{/* Machines Grid */}
			<section className="machines-grid section-padding">
				<Container>
					<div className="section-title mb-5">
						<h2 className="funnyfonts">Our Machinery Collection</h2>
						<p className="section-desc">Professional agricultural equipment for every need</p>
					</div>
					<Row>
						{machines.map((machine) => (
							<Col lg="4" md="6" key={machine.id} className="mb-4">
								<Card className="machine-card">
									<div className="machine-image-wrapper">
										<img src={machine.image} alt={machine.name} />
										<div className="machine-overlay">
											<a href="tel:0712550433" className="overlay-btn">
												<i className="fa fa-phone mr-2"></i>Contact
											</a>
										</div>
									</div>
									<Card.Body>
										<h4 className="machine-name">{machine.name}</h4>
										<p className="machine-description">{machine.description}</p>
										<div className="machine-features">
											{machine.features.map((feature, idx) => (
												<span key={idx} className="feature-badge">
													<i className="fa fa-check-circle mr-2"></i>{feature}
												</span>
											))}
										</div>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</section>

			{/* CTA Banner */}
			<section className="cta-banner">
				<Container className="text-center">
					<h2 className="banner-title funnyfonts mb-4">Looking for Quality Machinery?</h2>
					<p className="banner-subtitle mb-4">
						Contact us today for professional consultation and competitive pricing
					</p>
					<div className="banner-buttons">
						<a href="tel:0712550433" className="btn btn-banner-primary">
							<i className="fa fa-phone mr-2"></i>Call Now
						</a>
						<a href="https://wa.me/254712550433" className="btn btn-banner-secondary" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-whatsapp mr-2"></i>WhatsApp
						</a>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default CarouselPage;
