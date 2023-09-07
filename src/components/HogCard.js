import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard({ hog }) {
  const [isCardHidden, setIsCardHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails((prevDetails) => !prevDetails);
  }

  if (isCardHidden) {
    return null;
  }

  const { name, specialty, image } = hog;

  return (
    <div className="ui card eight wide column pigTile">
      <div className="image">
        <img src={image} alt="hog pig" />
      </div>
      <div className="content">
        <h3 className="header">name:{name}</h3>
        <div className="description">specialty:{specialty}</div>
      </div>
      <div className="extra content">
        {showDetails ? <HogDetails hog={hog} /> : null}
        <button className="ui button" onClick={handleClick}>
          {showDetails ? "less info" : "more info"}
        </button>
        <button className="ui button" onClick={() => setIsCardHidden(true)}>
          hide
        </button>
      </div>
    </div>
  );
}

export default HogCard;
