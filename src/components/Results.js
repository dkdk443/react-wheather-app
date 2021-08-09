import React from 'react';
const Results = (props) => {
  const {cityName, country, templeture, conditionText, icon} = props.results;
  return (
    <div className="results">
      <div>
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
    </div>
  )
}
export default Results;