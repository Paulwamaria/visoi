import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Blog from "./blog"
import Contacts from "./contacts"
import Home from "./home"
import Gallery from "./gallery"
import Testimonials from "./testimonials"
import {Navbar, Nav} from "react-bootstrap"
class Mynavbar extends React.Component {
    render() {
        return (<div>
            <Router>
                <Navbar expand="lg" className="bg-primary">
                    <Navbar.Brand href="/" className="text-white mr-3 funnyfonts navLink">
                        <i className="fa fa-home text-white mr-auto"></i>VISOI MACHINERIES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="text-white">
                    <Nav className="text-white mx-auto">
                        <Nav.Link href="/" className="text-white sofia navLink">About</Nav.Link>
                        <Nav.Link href="/gallery" className="text-white sofia navLink">Gallery</Nav.Link>
                        <Nav.Link href="/testimonials" className="text-white sofia navLink">Testimonials</Nav.Link>
                        <Nav.Link href="/blog" className="text-white sofia navLink">Blog</Nav.Link>
                        <Nav.Link href="/contacts" className="text-white sofia navLink">Contacts</Nav.Link>
                    </Nav>
                    <ul className="navbar-nav text-white mr-auto nav-flex-icons">
                        <li className="nav-item text-white">
                            <a href="/" className="nav-link waves-effect waves-light">
                            <i className="fa fa-twitter text-white navLink"></i>
                            </a>
                        </li>
                        <li className="nav-item text-white">
                            <a href="/" className="nav-link waves-effect waves-light">
                            <i className="fa fa-youtube-play text-white navLink"></i>
                            </a>
                        </li>
                        <li className="nav-item text-white">
                            <a href="/" className="nav-link waves-effect waves-light">
                            <i className="fa fa-facebook text-white navLink"></i></a>
                        </li>
                        <li className="nav-item text-white">
                            <a href="/" className="nav-link waves-effect waves-light">
                            <i className="fa fa-linkedin text-white navLink"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link waves-effect waves-light">
                            <i className="fa fa-envelope-o text-white navLink"></i>
                            </a>
                        </li>
                    </ul>
                    </Navbar.Collapse>
                </Navbar>
                <br/>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/gallery" element = {<Gallery/>}></Route>
                    <Route exact path="/testimonials" element={<Testimonials/>}></Route>
                    <Route exact path="/blog" element={<Blog/>}></Route>
                    <Route exact path="/contacts" element={<Contacts/>}></Route>
                </Routes>

            </Router>

        </div>)
    }
}
export default Mynavbar
