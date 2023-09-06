import React from "react";
import FilterGrease from "./FilterGreased";

function HogClick({specialty,weight,greased,highestMedal}) {
    return (
        <div>
        <div className="specialty">{specialty}</div>
            <div className="weight">{weight}</div>
            <div className="greased">{greased}</div>
            <div className="highestMedal">{highestMedal}</div>
        </div>
    )
}

export default HogClick;