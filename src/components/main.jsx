import React from "react";
export default function Main(props){
    return(
        <div className="main">
            <div className="city">
                <img src={props.img.src} alt={props.img.alt} className="image-city"/>
                <div className="content">
                <div className="head">
                <img src="Map-Logo.png"/>
                <h4>{props.country}</h4>
                </div>
                <h2><a href={props.loc} target="_blank">{props.city}</a></h2>
                <p><b>{props.date}</b></p>
                <p>{props.dis}</p>
                </div>
            </div>
            
        </div>
    )
}