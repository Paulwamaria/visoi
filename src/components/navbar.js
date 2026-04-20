import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Contacts from "./contacts"
import Home from "./home"
import Gallery from "./gallery"
import {Navbar, Nav, Container} from "react-bootstrap"
import "../styles/navbar.css"

class Mynavbar extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Navbar expand="lg" className="navbar-professional sticky-top">
						<Container>
							<Navbar.Brand href="/" className="brand-text">
								<img src="/logo.png" alt="Visoi Machineries logo" className="brand-logo" />
								<span>VISOI</span>
							</Navbar.Brand>
							<Navbar.Toggle className="toggle-custom" aria-controls="basic-navbar-nav">
								<i className="fa fa-bars"></i>
							</Navbar.Toggle>
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto nav-items">
									<Nav.Link href="/" className="nav-item-link">
										<i className="fa fa-home mr-2"></i>Home
									</Nav.Link>
									<Nav.Link href="/gallery" className="nav-item-link">
										<i className="fa fa-images mr-2"></i>Gallery
									</Nav.Link>
									<Nav.Link href="/contacts" className="nav-item-link">
										<i className="fa fa-envelope mr-2"></i>Contact
									</Nav.Link>
								</Nav>
								<div className="social-icons">
									<a href="https://youtube.com/@josephmburu9101" title="YouTube" className="social-link">
										<i className="fa fa-youtube-play"></i>
									</a>
									<a href="https://web.facebook.com/profile.php?id=100064125221186" title="Facebook" className="social-link">
										<i className="fa fa-facebook"></i>
									</a>
									<a href="https://instagram.com/josephmburungethe?igshid=ZDc4ODBmNjlmNQ==" title="Instagram" className="social-link">
										<i className="fa fa-instagram"></i>
									</a>
									<a href="mailto:mburujoseph383@gmail.com" title="Email" className="social-link">
										<i className="fa fa-envelope-o"></i>
									</a>
								</div>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					<Routes>
						<Route exact path="/"
							element={<Home/>}></Route>
						<Route exact path="/gallery"
							element={<Gallery/>}></Route>
						<Route exact path="/contacts"
							element={<Contacts/>}></Route>
					</Routes>

				</Router>

			</div>
		)
	}
}
export default Mynavbar
