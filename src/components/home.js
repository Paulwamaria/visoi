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
								height='60%'/>
								{/* whatsapp link */}
							<a href="https://wa.me/254712550433" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
								<i className="fa fa-whatsapp whatsapp-icon"></i>
							</a>
                   
						</div>
						<div className="col-md-6 mb-4">
							<ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=uVJxX3sbVhc&ab_channel=MikeLess-FarmhandMike' width='100%' height='100%' controls/>
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

							<h6 className=" bg-white funnyfonts text-primary">Machines available at Visoi:</h6>
							<ul className="text-white">

								<li className="ml-0">Poshomills</li>
								<li className="ml-0">Shellers</li>
								<li className="ml-0">Hullers</li>
								<li className="ml-0">Silage Choppers</li>
								<li className="ml-0">Screw Press</li>
								<li className="ml-0">Aglomerators</li>
							</ul>
						</div>
					</div>

				</div>
			</Fragment>
		)
	}
}

export default Home;
