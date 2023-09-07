import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";
import HogList from "./HogList";

function App() {
  // call hogs here, get hog's name and image displayed
  // the keys in hogs object array are name: and image:
  // create a new component to handle the tiles
  // need filter for greased

  const [sortHog, setSortHog] = useState("name");

  // sort hogs based on name OR weight,
  // need .sort method and states
  // need useState for sortHogs

  const [greased, setGreased] = useState(false);

  // .filter makes a copy of hogs array that fulfills
  // the condition of the hog being 'greased'
  // greased is a boolean expression.  Can only be 'true' or 'false'
  // need useState

  const hogsDisplay = hogs
    .filter((hog) => (
      greased ? hog.greased : true
    ))
    .sort((hog1, hog2) => {
      if (sortHog === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter
          greased={greased}
          onChangeGreased={setGreased}
          sortHog={sortHog}
          onChangeSortHog={setSortHog}
        />
      </div>
      <div className="sixteen wide column centered">
        <HogList 
        hogs={hogsDisplay}
        />
      </div>
    </div>
  );
}

export default App;
