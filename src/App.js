import React, {Fragment} from "react";
import "./App.css";
import Mynavbar from "./components/navbar";
import Footer from "./components/footer"

function App() {
	return (
		<Fragment>
			<div className="App">
				<Mynavbar/>
				<Footer/>
			</div>
		</Fragment>
	);
}

export default App;
