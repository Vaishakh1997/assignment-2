import React, { Component } from 'react';
import '../App.css'
import { Route, BrowserRouter as Router, Link, Switch} from "react-router-dom";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <Link style={{textDecoration:'none'}} to="/"><h1>Albums</h1></Link>
            </div>
         );
    }
}
 
export default Header;