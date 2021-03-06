import React, { Component } from 'react';
import Answers from '../answer/Answers';
import AddAnswer from '../answer/AddAnswer';
import EditQuestion from '../question/EditQuestion';
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


 // Válasz hozzáadása
  addAnswer = (title) =>{
    const newA = {
      id : uuid.v4(),
      title ,
      isEditable : false
    } 
      this.state.questions.map(que => {
        if(que.id === this.props.match.params.id){
           return que.answers.push(newA);
        }
        return que;
      }) ;
      localStorage.setItem('previous', JSON.stringify(this.state.questions));
  }
// Válasz törlése
  delAnswer = (id) =>{
    this.state.questions.map(que => {
      if(que.id === this.props.match.params.id){
        que.answers = [...que.answers.filter(ans => { return ""+ ans.id !==id })];   
      }
      return que ;
    })
    localStorage.setItem('previous', JSON.stringify(this.state.questions));
    window.location.reload();
  }
// Válasz szerkesztése 
  edit = (title,idd) => {
    this.state.questions.map(que => {
      if(que.id === this.props.match.params.id){
        que.answers.map( ans => {
          if ( ans.id === idd) {
            ans.title = title ;
          }
          return ans ;
        })
      }
      return que ;
    })
    localStorage.setItem('previous', JSON.stringify(this.state.questions)); 
    window.location.reload() ;
  }
  // Kérdés szerkesztése
  editQuestion=(title)=>{
    this.state.questions.map(que => {
      if ( que.id === this.props.match.params.id) {
        que.title = title ;
      }
      return que ;
    })
   localStorage.setItem('previous', JSON.stringify(this.state.questions)); 
    window.location.reload() ;
        
  }

  render() { 
     return this.state.questions.map((que)=>(que.id === this.props.match.params.id) 
     ?(
        <div key = {que.id}>
          <div className = 'CimStyle'>
          <EditQuestion question = {que} new = {this.editQuestion}/>
           </div>
          <AddAnswer addAnswer={this.addAnswer}/>
          <Answers answers = {que.answers} delAnswer= {this.delAnswer} edit = {this.edit}/>
        
        </div>
      )

     :(<React.Fragment key = {que.id} />)
      ); 
}
}


export default QuestionSite;