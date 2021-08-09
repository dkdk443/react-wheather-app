import React from 'react';
const Results = (props) => {
  let results = props.results;
  const {cityName, country, templeture, conditionText, icon} = props.results;
  return (
    <div className="results">
      <h2>results</h2>
      {cityName
        && <div>{cityName}</div>}
      {country
        && <div>{country}</div>}
      {templeture
        && <div>{templeture}<span>℃</span>
        {icon && <img src={icon} />} 
        {conditionText && <p>{conditionText}</p>} 
      </div>}

    </div>
  )
}
export default Results;