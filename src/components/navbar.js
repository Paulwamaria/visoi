import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Blog from "./blog"
import Contacts from "./contacts"
import Home from "./home"
import Gallery from "./gallery"
import Testimonials from "./testimonials"
import {Navbar, Nav, Container} from "react-bootstrap"
class Mynavbar extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Navbar expand="lg" className="bg-primary">
						<Container>
							<Navbar.Brand href="/" className="mr-3 funnyfonts navLink text-white">
								<i className="fa fa-home text-white mr-auto"></i>VISOI MACHINERIES</Navbar.Brand>
							<Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav"> <i className="fa fa-align-justify text-primary"/> </Navbar.Toggle>
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="text-white mx-auto">
									<Nav.Link href="/" className="text-white sofia navLink">Home</Nav.Link>
									<Nav.Link href="/gallery" className="text-white sofia navLink">Gallery</Nav.Link>
									{/* <Nav.Link href="/testimonials" className="text-white sofia navLink">Testimonials</Nav.Link>
									<Nav.Link href="/blog" className="text-white sofia navLink">Blog</Nav.Link> */}
									<Nav.Link href="/contacts" className="text-white sofia navLink">Contacts</Nav.Link>
								</Nav>
								<ul className="navbar-nav text-white mr-auto nav-flex-icons">
									<li className="nav-item text-white">
										<a href="https://youtube.com/@josephmburu9101" className="nav-link waves-effect waves-light">
											<i className="fa fa-youtube-play text-white navLink"></i>
										</a>
									</li>
									<li className="nav-item text-white">
										<a href="https://web.facebook.com/profile.php?id=100064125221186" className="nav-link waves-effect waves-light">
											<i className="fa fa-facebook text-white navLink"></i>
										</a>
									</li>
									<li className="nav-item text-white">
										<a href="https://instagram.com/josephmburungethe?igshid=ZDc4ODBmNjlmNQ==" className="nav-link waves-effect waves-light">
										<i className="fa fa-instagram text-white navLink"></i>
										</a>
									</li>
									<li className="nav-item">
										<a href="mailto:Mburujosehp383@gmail.com" className="nav-link waves-effect waves-light">
											<i className="fa fa-envelope-o text-white navLink"></i>
										</a>
									</li>
								</ul>

							</Navbar.Collapse>
						</Container>
					</Navbar>
					<br/>
					<Routes>
						<Route exact path="/"
							element={<Home/>}></Route>
						<Route exact path="/gallery"
							element={<Gallery/>}></Route>
						{/* <Route exact path="/testimonials"
							element={<Testimonials/>}></Route>
						<Route exact path="/blog"
							element={<Blog/>}></Route> */}
						<Route exact path="/contacts"
							element={<Contacts/>}></Route>
					</Routes>

				</Router>

			</div>
		)
	}
}
export default Mynavbar
