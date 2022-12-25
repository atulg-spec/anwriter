import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  return (
    <>
    <div className="nav">
        {props.head}
        <div className="navaction">
          About
        </div>
        <div className="navaction">
          Contact
        </div>
        
    </div>
    </>
  )
}



Navbar.propTypes = {
  // head: PropTypes.string.isRequired
  head: PropTypes.string
}

Navbar.defaultProps = {
    head : "Reacted :) J$"
};
