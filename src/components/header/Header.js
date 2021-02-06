import React from 'react';
import "./header.styles.scss";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';

const Header = () => {
    return (
      <AppBar position="static">
        <nav className="Menu">
         
         
            <div>
              <Link to="/">Home</Link> 
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/users">Users</Link>
            </div>

         
        </nav>
        </AppBar>
    )
}

export default Header