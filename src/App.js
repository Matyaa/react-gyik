import React, { Component } from 'react';
import Questions from './components/Questions' ;
import Header from './components/Layout/Header';
import QuestionSite from './components/Layout/QuestionSite'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import './App.css';
//this.setState({questions: [...this.state.questions.filter(question => question.id !== id)]}); 

class App extends Component {
   state = {
    currentQuestion : null ,
    questions : [
      {
        id :1 ,
        title : "Megettem a kedvenc sajtom,hoz nekem valaki?" ,
        answers : [
          {
            id : 1,
            title : "Persze, szivesen!"
          }
          ]
      },
      {
        id : 2,
        title : "Vajon a vajon lehet egeret fogni?",
        answers : [
          {
            id : 1,
            title : "csak vaj alatt lehet, vajon sajnos nem"
          },
          {
            id : 2,
            title : "Nekem sikerult már vajon is fogni,bár lehet ő egy nagyon buta egér volt."
          }
          ]
      },
      {
        id : 3,
        title : "Kalkulus még tényleg könnyű tárgynak számit?",
        answers : [
          {
            id : 1,
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

  
  


  render() {
   
    localStorage.setItem('previous', JSON.stringify(this.state.questions));
    return (
      
      <div className="App">
      <Header/>
        <Router >
          <Route exact path = "/"  render= {props => (
            <Questions questions = {this.state.questions}/>
          )}/>
            
          <Route path ="/question/:id" component = {QuestionSite} />
         
        </Router>
      </div>
    );
  }
}

export default App;
