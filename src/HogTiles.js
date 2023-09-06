import React from "react";
import HogClick from "./HogClick"

function HogTiles({ hogs }) {
  // call hogs here, get hog's name and image displayed
  // the keys in hogs object array are name: and image:
  // need to call .pigTile from css
  return (
    <>
      <button
        onClick={hogs.map((hog) => (
          <HogClick
            specialty={hog.specialty}
            weight={hog.weight}
            greased={hog.greased}
            highestMedal={hog.highestMedal}
          />
        ))}
      />
    </>
  );
}

export default HogTiles;
