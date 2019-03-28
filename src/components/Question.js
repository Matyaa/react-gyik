import React, { Component } from 'react';


class Question extends Component {

  render() {
    return (
      
        < p style = {QuestioNStyle}>
              <a href = {this.props.question.id} style = {{textDecoration:'none',color : '#555'}} >{this.props.question.title} </a>
          {'Válaszok : '}
            {this.props.question.answers.length}
            <button style = {btnStyle} onClick={this.props.delQuestion.bind(this,this.props.question.id)}> x </button>
            </p>
    )
  }
}
const QuestioNStyle = {
    backgroundColor : 'silver',
    color : 'black',
    padding : "15px",
    borderBottom : '2px solid black',
    borderRadius : '15px',
    textDecoration : 'none'
   
}
const btnStyle = {
    float : 'right',
    background : 'red',
    padding : '5px 10px',
    borderRadius : '25%'
}
export default Question;