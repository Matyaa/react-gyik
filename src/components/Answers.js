import React, { Component } from 'react';
import Answer from './Answer' ;

class Answers extends Component {
  render() {
    return this.props.answers.map((ans)=>(
        <Answer answer = {ans} key = {ans.id}/>
      ));
  }
}


export default Answers;
