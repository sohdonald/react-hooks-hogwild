import React from "react";

function Filter({ greased, onChangeGreased, sortHog, onChangeSortHog }) {
  function handleChangeSortHog(event) {
    onChangeSortHog(event.target.value);
  }
  function handleChooseGreased(event) {
    onChangeGreased(event.target.checked);
  }
  return (
    <div className="filter wrapper">
      <div className="ui menu">
        <div className="ui item">
          <label>sort by</label>
        </div>
        <div className="ui item">
          <select className="ui selection dropdown"
          name="sort" onChange={handleChangeSortHog} value={sortHog}>
            <option value="name">name</option>
            <option value="weight">weight</option>
          </select>
        </div>
        <div className="ui item">
            <label>Would you like to see greased pigs only?</label>
        </div>
        <div className="ui item">
            <input className="ui toggle checkdown" checked={greased} onChange={handleChooseGreased} type='checkbox'/>
        </div>
      </div>
    </div>
  );
}

export default Filter;
