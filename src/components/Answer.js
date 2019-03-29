import React, { Component } from 'react';
class Answer extends Component {

    

  render() {
    return (
        <div style={AnswerStyle}>
            <div style = {TiS}>{this.props.answer.title}</div>
            <button onClick = {this.props.delAnswer.bind(this,this.props.answer.id)}style = {Btn} > Törlés</button>
            <button style = {Btn}> Szerkesztés</button>
            </div>  
        
    );
  }
}

const AnswerStyle = {
    display : 'flex',
  textAlign: 'left',  
  fontSize : '25px' ,
  padding : '20px',
  background : '#443266',
  color : '#C3C3E5',
  borderBottom: '1px solid '
}
const TiS = {
    flex : '15'
}

const Btn = {
    float : 'right',
    padding : '5px 5px 5px 5px',
    borderRadius : '5px',
    background : '#443266',
    color : '#F1F0FF',
    textDecoration: 'none',
    flex : '1',
    height : '25px'
}
export default Answer;