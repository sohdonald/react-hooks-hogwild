import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "../HogTiles";

import hogs from "../porkers_data";

function App({ hogName, hogImg }) {
  // call hogs here, get hog's name and image displayed
  // the keys in hogs object array are name: and image:
  // create a new component to handle the tiles

  return (
    <div className="App">
      <Nav />
      <HogTiles name={hogName.name} image={hogImg.image} />
    </div>
  );
}

export default App;
