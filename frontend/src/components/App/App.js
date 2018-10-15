import React, { Component } from 'react';
import './App.css';
import Question from "../Questions/Question"



class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }
  
  componentDidMount() {
    this.getQuestions()
  }

  getQuestions = ()  =>{
    fetch('http://localhost:3001/api/questions')
    .then( response => response.json())
    .then( questions => console.log(questions))
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>
            Web Developer Questions
          </h1>
        

        </header>
        <main>
          <Question/>
        </main>
      </div>
    );
  }
}

export default App;
