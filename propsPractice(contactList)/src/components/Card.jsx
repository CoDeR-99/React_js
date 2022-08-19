import React from "react";

function Card(props){
    return (
        <div className="card">
        <div className="top">
        <h2 className="name">{props.name}</h2>
            <img className="circle-img" src={props.imgURL} alt="avatar.img"/>
        </div>
        <div className="bottom">
        <p className="info">{props.phone}</p>
            <p className="info"><a href= {props.insta} target= "_blank" >Instagram Account {props.name}</a></p>
        </div>          
        </div>
    );
}

export default Card;