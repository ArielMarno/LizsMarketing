import React from 'react'
import '../styles/burguer.css';

const Burguer = (props) => {
  return (
    <>
        <input id="toggleChecker" onClick={props.handleClick} type="checkbox" placeholder="checkbox" />
        <label id="togglerLable" htmlFor="toggleChecker">
            <div className="checkboxtoggler">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            </div>
        </label>
    </>
  )
}

export default Burguer