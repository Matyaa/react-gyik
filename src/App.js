import React, { Component } from 'react';
import Questions from './components/question/Questions' ;
import Header from './components/Layout/Header';
import AddQuestion from './components/question/AddQuestion';
import QuestionSite from './components/Layout/QuestionSite'
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import uuid from 'uuid';
import './App.css';
 

class App extends Component {
   state = {

    questions : [
      {
        id : uuid.v4(),
        title : "Mi az élet értelme ?" ,
        
        answers : [
          {
            id : uuid.v4(),
            title : "42 , ezt biztosan tudom!",
          }
          ]
      },
      {
        id : uuid.v4(),
        title : "Vajon a vajon lehet vajat olvasztani?",
      
        answers : [
          {
            id : uuid.v4(),
            title : "Igen, amennyiben elfogadod,hogy a vaj alatt lévő vaj is elolvad.",
          }
          
          ]
      },
      {
        id : uuid.v4(),
        title : "Miért ilyen nehéz a kalkulus?",
        
        answers : [
          {
            id : uuid.v4(),
            title : "A kalkulus még könnyű tárgynak számit!",
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

  // Kérdés törlése
  delQuestion = (id) =>{
    this.setState({questions: [...this.state.questions.filter(question => question.id !== id)]});  }
    

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem('previous', JSON.stringify(nextState.questions));
  }
  

  // kérdés hozzáadása
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
      <React.Fragment>
      
      
        <Router >
          <Header/>
          <div className="App">
          <Route exact path = "/"  render= {props => (
            <React.Fragment>
            <AddQuestion addQuestion = {this.addQuestion}/>
            <Questions questions = {this.state.questions} delQuestion = {this.delQuestion}/>
            </React.Fragment>
          )}/>
            
          <Route path ="/question/:id" component = {QuestionSite} />
            </div>
        </Router>
      
      </React.Fragment>
    );
  }
}

export default App;
