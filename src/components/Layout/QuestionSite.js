import React, { Component } from 'react';
import Answers from '../Answers';
import AddAnswer from '../AddAnswer';
import uuid from 'uuid';
class QuestionSite extends Component {

  state = null ;

  componentWillMount(){
    localStorage.getItem('previous') && this.setState(
      {
        questions : JSON.parse(localStorage.getItem('previous'))
      }
    )
     }

  
     componentWillUpdate(nextProps,nextState){
      localStorage.setItem('previous', JSON.stringify(nextState.questions));
     }



  addAnswer = (title) =>{
    const newA = {
      id : uuid.v4(),
      title
    } 
      this.state.questions.map(que => {
        if(que.id === this.props.match.params.id){
          que.answers.push(newA);
        }
      }) ;
      localStorage.setItem('previous', JSON.stringify(this.state.questions));
  }
  delAnswer = (id) =>{
    this.state.questions.map(que => {
      if(que.id === this.props.match.params.id){
        que.answers = [...que.answers.filter(ans => ""+ ans.id !==id)];   
      }
    })
    localStorage.setItem('previous', JSON.stringify(this.state.questions));
    window.location.reload();
  }


  render() { 
     return this.state.questions.map((que)=>(que.id === this.props.match.params.id) 
     ?( <div className="container" key = {que.id}>
        <div style = {CimStyle}>{que.title}
        
        </div>
        <AddAnswer addAnswer={this.addAnswer}/>
        <Answers answers = {que.answers} delAnswer= {this.delAnswer}/>
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
  marginTop : '2vh'


}

export default QuestionSite;