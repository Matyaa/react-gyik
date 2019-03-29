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
    background : '#443266',
    color : '#C3C3E5'
}

export default Header;
