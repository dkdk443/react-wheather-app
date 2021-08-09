import React from 'react';
const Results = (props) => {
  const {cityName, country, templeture, conditionText, icon} = props.results;
  return (
    <div className="section">
      <div>
       {cityName
          && <h2 className="title is-2">{cityName}</h2>}
        {country
          && <h3 className="subtitle is-3">{country}</h3>}
        {templeture
          && <div>{templeture}<span>℃</span>
          
          {icon && <figure class="image is-64x64">
            <img src={icon} />
          </figure>} 
          {conditionText && <p>{conditionText}</p>} 
        </div>}
      </div>
    </div>
  )
}
export default Results;