import React from "react"
import CarouselPage from "./carousel"
import "../styles/gallery.css"

class Gallery extends React.Component {
	render() {
		return (
			<div className="gallery-page">
				<div className="gallery-header">
					<h1 className="gallery-title">Gallery</h1>
					<p className="gallery-subtitle">Explore Our Quality Machinery & Projects</p>
				</div>
				<div className="gallery-container">
					<CarouselPage/>
				</div>
			</div>
		)
	}
}
export default Gallery
