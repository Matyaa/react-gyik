import React, { Component } from 'react';
import Question from './Question' ;
class Questions extends Component {
  render() {
    return this.props.questions.map((que)=>(
    <Question question = {que} key = {que.id}/>
  ));
  }
}


export default Questions;
