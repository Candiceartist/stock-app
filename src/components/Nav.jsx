import React from 'react';
import { Link } from "react-router-dom";


function Nav(props) {
    return (
      <div className="nav">
        <Link to="/">
          <div>iStock</div>
        </Link>
        <Link to="/stocks">
          <div className='navItem'>Stocks</div>
        </Link>
        <Link to="/about">
          <div className='navItem'>About</div>
        </Link>
      </div>
    );
  };

export default Nav