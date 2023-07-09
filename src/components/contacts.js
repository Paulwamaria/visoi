import React from "react"
import catalogue from "../assets/gallery/combined/catalogue.png"
import avatar from "../assets/gallery/combined/avatar01.jpg"
class Contacts extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4">
						<h5 className="sofia">For enquiries, quotations or any other form of consultation, kindly</h5>
						<h1 className="text-primary funnyfonts mb-3">Get in touch!</h1>
						<ul className="navbar-nav text-white mr-auto nav-flex-icons">
							<li className="text-white bg-primary">Contact: 254 712 550433</li>
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
						<a href="https://wa.me/254712550433" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-whatsapp whatsapp-icon"></i>
						</a>
					</div>
					<div className="col-md-4">
						<div className="profilediv overflow-hidden mb-2 mx-auto mt-3">
							<img className="img-responsive profileImage mx-auto"
								src={avatar}
								alt="avatar"/>{" "} </div>
						<h4 className="text-center text-info funnyFonts mb-2">
							Joseph Mburu
						</h4>
						<h6>
							Position: Chief Engineer</h6>
						<a href="tel:254712550433">
							Call
						</a>

						: 254712550433
						<a href="mailto:Mburujosehp383@gmail.com" className="nav-link waves-effect waves-light">

							<span className="text-info">Email:
																
								                                mburujoseph383@gmail.com</span>
						</a>
					</div>
					<div className="col-md-4">

						<div className="cataloguediv overflow-hidden mb-2 mx-auto mt-3">
							<img className="img-responsive catalogueImage mx-auto"
								src={catalogue}
								alt="catalogue"/>{" "} </div>
					</div>
				</div>
			</div>
		)
	}
}
export default Contacts
