import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "../HogTiles";

import hogs from "../porkers_data";

function App({ hogs }) {
  // call hogs here, get hog's name and image displayed
  // the keys in hogs object array are name: and image:
  // create a new component to handle the tiles
  // need filter for greased

  const [sortHog, setSortHog] = useState('name');

  // sort hogs based on name OR weight, 
  // need .sort method and states
  // need useState for sortHogs

  const [greased, setGreased] = useState(false)
  

  // .filter makes a copy of hogs array that fulfills
  // the condition of the hog being 'greased'
  // greased is a boolean expression.  Can only be 'true' or 'false'
  // need useState
  
  const hogsDisplay = hogs.filter((hog)=>{
    (greased ? hog.greased: true)
  }).sort((hog1, hog2)=>{
    if(sortHog === 'weight') {
      return hog1.weight-hog2.weight
    } else {
      return hog1.name.localeCompare(hog2.name);
    }
   }) 

  return (
    <div className="App">
      <Nav />
      {hogs.map((hog) => (
        <HogTiles name={hog.name} image={hog.image} />
      ))}
    </div>
  );
}

export default App;
