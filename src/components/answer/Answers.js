import React, { Component } from 'react';
import Answer from './Answer' ;

class Answers extends Component {
  render() {
    return this.props.answers.map((ans)=>(
        <Answer answer = {ans} delAnswer= {this.props.delAnswer} edit = {this.props.edit} key = {ans.id}/>
      ));
  }
}


export default Answers;
