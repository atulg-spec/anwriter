import React from "react";

export default function message(props){
    return (
        <>
        <br />
        <div id="message" className="message">{props.condition}</div>
        </>
    )
}