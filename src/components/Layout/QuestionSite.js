import React, { Component } from 'react';
import Answers from '../Answers'
class QuestionSite extends Component {

  state = null ;

  componentWillMount(){
    localStorage.getItem('previous') && this.setState(
      {
        questions : JSON.parse(localStorage.getItem('previous'))
      }
    )
     }
  

  render() { 
     return this.state.questions.map((que)=>("" + que.id === this.props.match.params.id) 
     ?( <div className="container" key = {que.id}>
        <div style = {CimStyle}>{que.title}</div>
        <Answers answers = {que.answers}/>
        </div>
      )

     :(<React.Fragment key = {que.id} />)
      ); 
}
}
const CimStyle = {
  textAlign: 'center',  
  fontSize : '25px' ,
  padding : '20px 10px 10px 10px',
  background : '#C3C3E5',
  color : '#443266',
  marginTop : '5vh'


}

export default QuestionSite;