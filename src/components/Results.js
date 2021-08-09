import React from 'react';
const Results = (props) => {
  let results = props.results;
  return (
    <div className="results">
      <h2>results</h2>
      {results.cityName
        && <div>{results.cityName}</div>}
      {results.country
        && <div>{results.country}</div>}
      {results.templeture
        && <div>{results.templeture}<span>℃</span>
        {results.icon && <img src={results.icon} />} 
        {results.conditionText && <p>{results.conditionText}</p>} 
      </div>}

    </div>
  )
}
export default Results;