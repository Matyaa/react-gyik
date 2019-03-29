import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Question extends Component {

  render() {
    
    return ( 
      
        < p style = {QuestioNStyle}>
             {this.props.question.title}<br/>
          {'Válaszok : '}
            {this.props.question.answers.length}
            <Link style = {btnStyle} to ={`/question/${this.props.question.id}`} > Válaszok megtekintése</Link>
            </p>
    )
  }
}
const QuestioNStyle = {
    background : '#F1F0FF',
    color : '#443266',
    padding : "15px 15px",
    borderBottom : '2px solid #C3C3E5',
    borderRadius : '15px',
    textDecoration : 'none'
   
}
const btnStyle = {
    float : 'right',
    padding : '5px 10px',
    borderRadius : '5px',
    background : '#443266',
    color : '#F1F0FF',
    textDecoration: 'none'
}
export default Question;