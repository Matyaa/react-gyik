import React, { Component } from 'react';
class Answer extends Component {
  render() {
    return (
        <div style={AnswerStyle}>
            {this.props.answer.title}
        </div>
    );
  }
}

const AnswerStyle = {
  textAlign: 'left',  
  fontSize : '25px' ,
  padding : '20px',
  background : '#443266',
  color : '#C3C3E5',
  marginTop : '5vh'
}


export default Answer;