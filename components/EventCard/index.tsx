import React from "react";


import "./styles.css"


function EventCard(props:any) {
    return (

        <div className="Card">
            <h3>{props.title}</h3>
            <h4>{props.description}</h4>
            <div className="emptySpace"/>
            <h5>Onde e Quando?</h5>
            <h6>Evento online, dia {props.date}</h6>
        </div>
    )
}

export default EventCard
