import React from "react";
import {
	MDBCarousel,
	MDBCarouselCaption,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
	MDBContainer
} from "mdbreact";
import Blink from 'react-blink-text';
import poshoCollection from "../assets/images/poshoCollection.jpg";
import capture1 from "../assets/images/capture1.jpg";
import bgMixer from "../assets/images/bigSheller.jpg";
import bigChopper from "../assets/images/bigchopper.jpg";
import chaff2 from "../assets/images/chaff2.jpg";
import smChopper from "../assets/images/smallchopper.jpg";
import sheller from "../assets/images/sheller1.jpeg"
import chopperVideo from "../assets/gallery/videos/chopperVideo.mp4"

const CarouselPage = () => {
	return (
		<>

			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2">"
						<p className="text-white mt-3">
							Free delivery services!
						</p>
						<p className="text-white mt-3">Payment on delivery!</p>
						<p className="text-white mt-3">Free installation services!</p>
						<a href="https://wa.me/254712550433" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-whatsapp whatsapp-icon"></i>
						</a>

						<Blink color="black" fontSize="50" className="mt-5" text="Get your order now!!!"></Blink>
						<a href="tel:254712550433">
							<span className="text-white">Call</span>
						</a>

						: 254712550433
					</div>
					<div className="col-md-8 bg-primary">
						<MDBContainer>
							<MDBCarousel activeItem={1}
								length={7}
								showControls={false}
								showIndicators={false}
								className="">
								<MDBCarouselInner>
									<MDBCarouselItem itemId="1" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={poshoCollection}
												alt="First slide"/>
											<MDBMask overlay="black-light"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive ">Poshomills</h3>
											<a className="mx-auto mt-2" href="#servert">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
									<MDBCarouselItem itemId="2" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={chaff2}
												alt="Second slide"/>
											<MDBMask overlay="black-strong"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">Chaffcutter</h3>
											<a className="mx-auto mt-2" href="#chaff2">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
									<MDBCarouselItem itemId="3" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={smChopper}
												alt="Third slide"/>
											<MDBMask overlay="black-slight"/>
										</MDBView>
										<MDBCarouselCaption>
											<h3 className="h3-responsive">Small chopper</h3>
											<a className="mx-auto mt-2" href="#smChopper">
												{" "}
												<button className="text-white bg-primary mx-auto">view details</button>
											</a>
										</MDBCarouselCaption>
									</MDBCarouselItem>
									<MDBCarouselItem itemId="4" className="carou">
										<MDBView>
											<img className="d-block w-100 carouselimg"
												src={bigChopper}
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
