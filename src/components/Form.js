import React from 'react';
const Form = (props) => {
  return (

 
      <form
        className=""
        onSubmit={e => {props.getWheather(e)}}
      >
        <div className="field">
          <div className="control">
            <input 
              type="text"
              className="input"
              placeholder="city name" 
              value={props.city}
              onChange={e => {props.setCity(e.target.value)}}
              />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button
            className="button is-link"
            type="submit" 
            >Get Whather</button>
          </div>
        </div>
      </form>

    
  );
};
export default Form;