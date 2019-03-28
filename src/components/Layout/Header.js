import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div style = {HeaderStyle}>
            GYAKORI KÉRDÉSEK
        </div>
    );
  }
}
const HeaderStyle = {
    textAlign: 'center',
    fontSize : '50px',
    background : 'black',
    color : 'white'
}

export default Header;
