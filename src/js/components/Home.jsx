import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="mainCounter d-flex bg-dark ms-auto justify-content-center ">
            <div className="counterClock">
				<span><i class="fa-regular fa-clock"></i></span>
			</div>
			<div className="counter4 text-light">{props.golast}</div>
			<div className="counter3 text-light">{props.gothird}</div>
			<div className="counter2 text-light">{props.gosecond}</div>
			<div className="counter1 text-light">{props.gofirst}</div>			
		</div> 
	);
};



export default Home;