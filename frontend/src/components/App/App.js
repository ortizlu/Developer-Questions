import React, { Component } from 'react'
import './App.css'
import Question from '../Questions/Question'
import Add from '../Questions/Add'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      index: 4
    }
  }

  componentDidMount() {
    this.getQuestions()
  }

  newQuestion = () => {
    this.setState({
      index: Math.floor(Math.random() * this.state.questions.length)
    })
  }

  getQuestions = () => {
    fetch('http://localhost:3001/api/questions')
      .then(response => response.json())
      .then(questions =>
        this.setState({
          questions: questions
        })
      )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Web Developer Questions</h1>
        </header>
        <main>
          <Question question={this.state.questions[this.state.index]} />
          <button onClick={this.newQuestion}>New Question</button>
          <Add />
        </main>
      </div>
    )
  }
}

export default App
