import React, {Fragment} from "react";
import ReactPlayer from 'react-player/lazy'
import Posho from "../assets/images/posho.png"
class Home extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4">
							<h5 className="sofia">Welcome to:</h5>
							<h1 className="text-primary funnyfonts">Visoi Machineries Nakuru</h1>
							<h5 className="sofia">Your partner in agricultural machines!</h5>
							<img src={Posho}
								className=" posho"
								width='100%'
								height='60%'/> {/* whatsapp link */}
							<a href="https://wa.me/254712550433" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-whatsapp whatsapp-icon"></i>
							</a>

						</div>
						<div className="col-md-6 mb-4">
							<ReactPlayer className='react-player' url='https://www.youtube.com/shorts/thDHihzx3hA' width='100%' height='100%' controls/>
						</div>
						<div className="col-md-2 bg-primary">
							<h5 className=" bg-white funnyfonts text-primary">ABOUT</h5>
							<ul className="text-white">
								<li className="ml-0">Fabrication of new agricultural machines</li>
								<li className="ml-0">Maintainance services</li>
								<li className="ml-0">Free delivery services</li>
								<li className="ml-0">Machine usage training</li>
								<li className="ml-0">Free machine installation</li>
							</ul>

							<h6 className="funnyfonts text-white">For enquiries, quotations or any other form of consultation, kindly</h6>
						<h5 className="text-primary bg-white funnyfonts mb-3">Get in touch!</h5>
						<ul className="navbar-nav text-white mr-auto nav-flex-icons">
							<li className="text-white bg-primary"><a href="tel:0712550433" className="text-white">Contact:0712550433</a></li>
							<li className="bg-primary">
								<a href="mailto:Mburujosehp383@gmail.com" className="nav-link waves-effect waves-light">
									<i className="fa fa-envelope-o text-white navLink"> 
										Email:
									</i>
									mburujoseph383@gmail.com
								</a>
							</li>

							<li className="bg-primary text-white">
								<a href="https://web.facebook.com/profile.php?id=100064125221186" className="nav-link waves-effect waves-light">
									<i className="fa fa-facebook text-white navLink ">acebook:
									</i>
									Visoi Machinery
								</a>
							</li>
							<li className="bg-primary text-white">
								<a href="https://instagram.com/josephmburungethe?igshid=ZDc4ODBmNjlmNQ==" className="nav-link waves-effect waves-light">
									<i className="fa fa-instagram text-white navLink">
										Instagram:
									</i>
									josephmburungethe
								</a>
							</li>
							<li className="bg-primary text-white">
								<a href="https://youtube.com/@josephmburu9101" className="nav-link waves-effect waves-light">
									<i className="fa fa-youtube-play text-white navLink">
										Youtube:
									</i>
									@josephmburu9101
								</a>
							</li>

						</ul>
						</div>
					</div>

				</div>
			</Fragment>
		)
	}
}

export default Home;
