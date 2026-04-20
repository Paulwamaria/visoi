import React from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import poshoCollection from "../assets/images/poshoCollection.jpg";
import capture1 from "../assets/images/capture1.jpg";
import bgMixer from "../assets/images/bigSheller.jpg";
import bigChopper from "../assets/images/bigchopper.jpg";
import chaff2 from "../assets/images/chaff2.jpg";
import smChopper from "../assets/images/smallchopper.jpg";
import sheller from "../assets/images/sheller1.jpeg"
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
												alt="Fourth slide"/>
											<MDBMask overlay="black-light"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">Large chopper</h3>
											<a className="mx-auto mt-2" href="#bigChopper">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
									<MDBCarouselItem itemId="5" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={bgMixer}
												alt="Fourth slide"/>
											<MDBMask overlay="black-light"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">Mixer</h3>
											<a className="mx-auto mt-2" href="#bgMixer">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
									<MDBCarouselItem itemId="6" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={capture1}
												alt="Fourth slide"/>
											<MDBMask overlay="black-light"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">Maize Huller</h3>
											<a className="mx-auto mt-2" href="#capture1">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
									<MDBCarouselItem itemId="7" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={sheller}
												alt="Fourth slide"/>
											<MDBMask overlay="black-light"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">Sheller</h3>
											<a className="mx-auto mt-2" href="#capture1">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
								</MDBCarouselInner>
							</MDBCarousel>
						</MDBContainer>
					</div>
					<div className="col-md-2">
						<div className="mt-5">
							<video width="100%" height="100%" controls>
								<source src={chopperVideo} type="video/mp4"/>
							</video>
						</div>
					</div>
				</div>
			</div>
			{/* First container1 */}
			<div className="container-fluid">
				<div className="row">
					{/* poshoCollection */}
					<div className="col-md-4 cardprojectContaner mt-5">
						<div className=" cardProject ovlerflow-hidden lighten-2">
							<div className=" card-header sofia text-white text-center" id="servert">

								Poshomill Collection

							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-6">

										{" "}
										<img src={poshoCollection}
											className="img-responsive projimg"
											alt="poshoCollectionimage"/>

									</div>

									<div className="col-sm-6">
										<h5 className="text-center sofia">
											About Poshomills
										</h5>
										<p>
											We have a variety of poshomills ranging from small to large. They also run on different engines such as single phase electric motor, three phase electric mortor , diesel engine or a combination of motor and engine.
										</p>
									</div>
								</div>
								<hr></hr>
								<div className="row">

									<h6 className="sofia text-center">Availlable Poshomills</h6>
									<ul>
										<li>5 hp motor driven single phase poshomill</li>
										<li>30 hp modor driven three phase poshomill</li>
										<li>10 hp dielsel engine poshomill</li>
										<li>Duo poshomill; engine + motor</li>

									</ul>


								</div>
							</div>
						</div>
					</div>
					{/* small chopper */}
					<div className="col-md-4 cardprojectContaner mt-5">
						<div className=" cardProject ovlerflow-hidden lighten-2">
							<div className=" card-header sofia text-white text-center" id="smChopper">
								Multipurpose Chopper
							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-6">

										{" "}
										<img src={smChopper}
											className="img-responsive projimg"
											alt="smChopperHome"/>

									</div>

									<div className="col-sm-6">
										<h5 className="text-center sofia">
											Multipurpose Chopper
										</h5>
										<p>
											This is a Multipurpose chopper for crushing and chopping animal feeds. Its suitable for chopping silage and crushing maize cobs.
										</p>
									</div>
								</div>
								<hr></hr>
								<div className="row">

									<h6 className="sofia text-center">Available at our workshop</h6>
									<ul>
										<li>
											7.5 hp petrol driven chopper</li>
										<li>10.5 hp petrol driven engine chopper</li>

									</ul>


								</div>
							</div>
						</div>
					</div>
					{/* bgMixer */}
					<div className="col-md-4 cardprojectContaner mt-5">
						<div className=" cardProject ovlerflow-hidden lighten-2">
							<div className=" card-header sofia text-white text-center" id="bgMixer">

								Mixer

							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-6">

										<img src={bgMixer}
											className="img-responsive projimg"
											alt="mybgMixerHomePage"/>

									</div>

									<div className="col-sm-6">
										<h5 className="text-center sofia">About Mixer</h5>
										<p>
											This is an agricultural machine suitable for mixing animal feeds.
										</p>
									</div>
								</div>
								<hr></hr>
								<div className="row">

									<h6 className="sofia text-center">Available mixers</h6>
									<ul>
										<li>Half tone mixer</li>
										<li>One tone mixer</li>
										<li>Three quater tone mixer</li>

									</ul>


								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Images container2 */}
			<div className="container-fluid">
				<div className="row">
					{/* chaff2 */}
					<div className="col-md-4 cardprojectContaner mt-5">
						<div className=" cardProject ovlerflow-hidden lighten-2 ">
							<div className=" card-header sofia text-white text-center" id="chaff2">

								Chaffcutter

							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-6">

										{" "}
										<img src={chaff2}
											className="img-responsive projimg"
											alt="chaff2HomePage"/>

									</div>

									<div className="col-sm-6">
										<h5 className="text-center sofia">About Chaffcutter</h5>
										<p>
											This is a chaffcutter for chopping silage
										</p>
									</div>
								</div>
								<hr></hr>
								<div className="row">

									<h6 className="sofia text-center">Chaffcutters available</h6>
									<ul>
										<li>7.5 hp petrol driven engine chaffcutter</li>
										<li>5 hp single phase motor driven chaffcutter</li>

									</ul>

								</div>
							</div>
						</div>
					</div>
					{/* bigChopper */}
					<div className="col-md-4 cardprojectContaner mt-5">
						<div className=" cardProject ovlerflow-hidden lighten-2">
							<div className=" card-header sofia text-white text-center" id="bigChopper">

								Large Multipurpose Chopper

							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-6">

										{" "}
										<img src={bigChopper}
											className="img-responsive projimg"
											alt="bigChopperHomePage"/>

									</div>

									<div className="col-sm-6">
										<h5 className="text-center sofia">About Large Chopper</h5>
										<p>This is a Multipurpose chopper for large scale production. It can chopp both wet and dry fodder as well crush maize cobs into floor. It comes with three different sieves depending on the task.</p>
									</div>
								</div>
								<hr></hr>
								<div className="row">

									<h6 className="sofia text-center">Choppers Availlable</h6>
									<ul>
										<li>Large chopper with a 10hp diesel driven egine
										</li>
										<li>Large chopper with a 10hp motor</li>

									</ul>

								</div>
							</div>
						</div>
					</div>
					{/* capture1 */}
					<div className="col-md-4 cardprojectContaner mt-5">
						<div className=" cardProject ovlerflow-hidden lighten-2">
							<div className=" card-header sofia text-white text-center" id="capture1">

								Huller

							</div>
							<div className="">
								<div className="row">
									<div className="col-sm-6">

										<img src={capture1}
											className="img-responsive projimg"
											alt="capture1Home"/>

									</div>

									<div className="col-sm-6">
										<h5 className="text-center sofia">About Huller</h5>
										<p>This is a maize huller responsible for removing maize husks</p>
									</div>
								</div>
								<hr></hr>
								<div className="row">

									<h6 className="sofia text-center">Huller</h6>
									<ul>
										<li>Maize huller with 5 hp single phase motor</li>

									</ul>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarouselPage;
