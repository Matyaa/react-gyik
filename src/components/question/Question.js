import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Question extends Component {

  render() {
    
    return ( 
      
        < p className = 'QuestioNStyle' >
            <Link style= {{textDecoration:'none'}}  to ={`/question/${this.props.question.id}`} > 
             {this.props.question.title}
          </Link> <button className = 'btnStyle' onClick = {this.props.delQuestion.bind(this,this.props.question.id)} >Törlés</button><br/>
          
          {'Válaszok : '}
            {this.props.question.answers.length}
            
            </p>
    )
  }
}

export default Question;