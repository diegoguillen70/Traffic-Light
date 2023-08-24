import React from "react";
import TrafficLight from './TrafficLight';
//include images into your bundle
import ConfigLight from './ConfigLight';
import { useState, useEffect,useRef } from "react";
import '../../styles/index.css'
//create your first component
const Home = () => {
	const [color, setColor] = useState('red');    
	const [isShow, setIsShow] = useState(false);
	const [redTime, setRedTime] = useState(10);
	const [yellowTime, setYellowTime] = useState(3);
	const [greenTime, setGreenTime] = useState(5);
	const [isStart, setStart] = useState(false);
	const [timerInterval, setTimerInterval] = useState(3000);
	const timerRed = useRef(0)
	const timerYellow = useRef(0)
	const timerGreen = useRef(0)
	useEffect (() => {		
				
		if (isStart){	
			
			//console.log(timer.current);
			const timeout = setTimeout(() => {	
				
				if (redTime >= 0 && color == 'red'){
					setRedTime(redTime - 1);
					console.log(redTime)
					redTime == 0 && setColor('green');	
				} 
				if (greenTime >= 0 && color == 'green'){
					setGreenTime(greenTime - 1);
					console.log(greenTime)
					greenTime == 0 && setColor('yellow');	
				} 
				if (yellowTime >= 0 && color == 'yellow'){
					setYellowTime(yellowTime - 1);
					console.log(yellowTime);
					yellowTime == 0 && setColor('red');	
				} 	
				if (redTime + yellowTime + greenTime <= 0){
					setRedTime(timerRed.current);
					setYellowTime(timerYellow.current);
					setGreenTime(timerGreen.current);
				}
				
			}, 1000) 		
			
			return () => clearTimeout(timeout);
		
		}
	}, [color, isStart, redTime, yellowTime, greenTime]);
	
	
	function startTrafficLight(){		
		setStart(!isStart);
		timerRed.current = redTime;
		timerYellow.current = yellowTime;
		timerGreen.current = greenTime;
		//console.log(redTime)
	}
	let btnGroup = 
		<section>
			<div className="uiverse">
				<span className="tooltip">start tarffic light</span>
				<span onClick={startTrafficLight}>
					Start
				</span>
			</div>
			<div className="uiverse">
				<span className="tooltip">Configure Time</span>
				<span onClick={() =>setIsShow(!isShow)}>
					Config
				</span>
			</div>
		</section>	
	return (
		<>
		<div>
		<TrafficLight onSetColor={setColor} onColor={color} onIsStart={isStart}/>	
		<ConfigLight onShow={isShow} onSetShow={setIsShow} onSetRedTime={setRedTime} onSetYellowTime={setYellowTime} onSetGreenTime={setGreenTime}/>
		</div>
		{isShow != true && btnGroup}
		</>
	);
};

export default Home;
