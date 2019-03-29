import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <div style = {HeaderStyle}>
          <Link to ='/'
           style ={{textDecoration :'none',
           color : '#F1F0FF'}}> 
            GYAKORI KÉRDÉSEK</Link>
        </div>
    );
  }
}
const HeaderStyle = {
    textAlign: 'center',
    fontSize : '50px',
    background : '#443266',
    color : '#F1F0FF'    
}

export default Header;
