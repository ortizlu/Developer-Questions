import React, { Component } from 'react'
import './App.css'
import Question from '../Questions/Question'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: '',
      index: 4
    }
  }

  componentDidMount() {
    this.getQuestions()
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
        </main>
      </div>
    )
  }
}

export default App
