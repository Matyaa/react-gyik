import React, { Component } from 'react';
import Questions from './components/Questions' ;
import Header from './components/Layout/Header';
import AddQuestion from './components/AddQuestion';
import QuestionSite from './components/Layout/QuestionSite'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import uuid from 'uuid';
import './App.css';
//this.setState({questions: [...this.state.questions.filter(question => question.id !== id)]}); 

class App extends Component {
   state = {
    currentQuestion : null ,
    questions : [
      {
        id : uuid.v4(),
        title : "Megettem a kedvenc sajtom,hoz nekem valaki?" ,
        answers : [
          {
            id : uuid.v4(),
            title : "Persze, szivesen!"
          }
          ]
      },
      {
        id : uuid.v4(),
        title : "Vajon a vajon lehet egeret fogni?",
        answers : [
          {
            id : uuid.v4(),
            title : "csak vaj alatt lehet, vajon sajnos nem"
          },
          {
            id : uuid.v4(),
            title : "Nekem sikerult már vajon is fogni,bár lehet ő egy nagyon buta egér volt."
          }
          ]
      },
      {
        id : uuid.v4(),
        title : "Kalkulus még tényleg könnyű tárgynak számit?",
        answers : [
          {
            id : uuid.v4(),
            title : "Legkönnyebben megszerzett megajánlott jegy volt eddig ,ha sztochát nem vesszük!"
          }
          ]
      }
    ]
  }

  componentWillMount(){
    localStorage.getItem('previous') && this.setState(
      {
        questions : JSON.parse(localStorage.getItem('previous'))
      }
    )
  }


  delQuestion = (id) =>{
    this.setState({questions: [...this.state.questions.filter(question => question.id !== id)]});  }
    
  /*GoToQuestion = (id) => {
    this.setState({currentQuestion: id} );
    return <Redirect push to="/question/"/>;
  } */

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem('previous', JSON.stringify(nextState.questions));
  }
  /*
  componentDidUpdate (){
    this.setState(localStorage.getItem('previous').questions);
  } */

  
  addQuestion = (title) => {
    const newQ = {
      id : uuid.v4(),
      title ,
      answers : []
    }
    this.setState({questions: [...this.state.questions,newQ]});
  }


  render() {
   
    localStorage.setItem('previous', JSON.stringify(this.state.questions));
    return (
      
      <div className="App">
      
        <Router >
          <Header/>
          <Route exact path = "/"  render= {props => (
            <React.Fragment>
            <AddQuestion addQuestion = {this.addQuestion}/>
            <Questions questions = {this.state.questions}/>
            </React.Fragment>
          )}/>
            
          <Route path ="/question/:id" component = {QuestionSite} />
         
        </Router>
      </div>
    );
  }
}

export default App;
