import React from "react";


import "./styles.css"


function CommunityCard(props:any) {
    return (

        <div className="CommunityCard">
            <>
            <img src={props.image} alt={props.name}/>
            </>
            <div className="Infos">
            <h5>{props.name}</h5>
            <h6> {props.city}/{props.state} <br/>{props.role}</h6>
            </div>
        </div>
    )
}

export default CommunityCard
