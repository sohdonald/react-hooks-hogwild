import React, { useState } from "react";

function HogCard({ hog }) {
  const [isCardHidden, setIsCardHidden] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails((prevDetails) => !prevDetails);
  }

if (isCardHidden) {
    return null
} 

const {name,specialty,image} = hog

  return <div className="ui card eight wide column pigTile"></div>;
}

export default HogCard;
