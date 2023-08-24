import React, {useState} from "react";
import '../../styles/index.css';

const TrafficLight = (props) => {  
     //console.log(props)
     function selectLight(event){    
        if (!props.onIsStart){  
        event.value == 'red' && props.onSetColor('red');
        event.value == 'yellow' && props.onSetColor('yellow');
        event.value == 'green' && props.onSetColor('green');  
        }     
     }
    return (
        
            <div id="traffic-light">
				<input type="radio" name="traffic-light-color" className={props.onColor == 'red' ? "red light-red" : "red"} value="red" onChange={(e) => selectLight(e.target)} />
				<input type="radio" name="traffic-light-color" className={props.onColor == 'yellow' ? "yellow light-yellow" : "yellow"} value="yellow" onChange={(e) => selectLight(e.target)}/>
				<input type="radio" name="traffic-light-color" className={props.onColor == 'green' ? "green light-green" : "green"} value="green" onChange={(e) => selectLight(e.target)}/>
			</div>
    )
}

export default TrafficLight;