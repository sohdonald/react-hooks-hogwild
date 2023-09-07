import React from "react";

function HogDetails({hog}) {
    const {greased, weight, highestMedal} = hog
    return (
        <div className="description">
        <strong>{greased ? "greased": "not greased"}</strong>
        <p>Highest medal achieved:<strong>{highestMedal}</strong></p>
        <p>weight:<strong>{weight}</strong></p>          
        </div>
    )
}

export default HogDetails;