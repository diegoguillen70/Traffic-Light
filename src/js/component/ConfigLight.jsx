import React from "react";
import './configLight.css';
import { useState } from "react";
const ConfigLight = (props) =>{
    const [redValue, setRedValue] = useState("");
    const [yellowValue, setYellowValue] = useState("");
    const [greenValue, setGreenValue] = useState("");
    if (!props.onShow) {
        return "";
    }
    function setLightsTime(){
        if (redValue !="" && yellowValue != "" && greenValue!=""){
        props.onSetRedTime(redValue);
        props.onSetYellowTime(yellowValue);
        props.onSetGreenTime(greenValue);    
        props.onSetShow(false);
        }  else {
            alert("please fill all the flieds");
        }  
    }
    return (
       
        <div className="set-timer">
        <h1>Set Traffic Light</h1>
        <div className="container">
            <label>Put red time in Seconds</label>
            <input type="text" pattern="[0-9]*" name="red-time" autoComplete='off' className="input-time red-time" onChange={(event) => {setRedValue(value => (event.target.validity.valid ? event.target.value : value))}} value={redValue}/>
            <label>Put yellow time in Seconds</label>
            <input type="text" pattern="[0-9]*" name="yellow-time" autoComplete='off' className="input-time yellow-time" onChange={(event) => {setYellowValue(value => (event.target.validity.valid ? event.target.value : value))}} value={yellowValue} />
            <label>Put green time in Seconds</label>
            <input type="text" pattern="[0-9]*" name="green-time"  autoComplete='off'className="input-time green-time" onChange={(event) => {setGreenValue(value => (event.target.validity.valid ? event.target.value : value))}} value={greenValue} />
            
        </div>
        <div className="btn-group">
        <button  className="btn-timer" onClick={setLightsTime}>Set Traffic Time</button>
        <button  className="btn-timer" onClick={() => props.onSetShow(false)}>Cancel</button>
        </div>
        </div>

       )
} 

export default ConfigLight;