import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) =>{
    return(
        <div className="card" style={{borderColor: {color}}}>
            <imag src = {emoji} alt =""></imag>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}