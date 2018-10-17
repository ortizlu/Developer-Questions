import React, { Component } from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
import Add from '../Questions/Add'
import Home from './Home'
import Edit from './Edit'
import '../Questions/Question.css'

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
        this.setState(
          {
            questions: questions
          },
          () => {
            this.newQuestion()
          }
        )
      )
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="sticky-top">
            <li>
              <Link to="/">devHelp.io</Link>
            </li>
            <li>
              <Link to="/add_question">Add Question</Link>
            </li>
          </nav>
          ;
        </header>
        <main className="center">
          {/* <Add /> */}
          <Switch>
            <Route
              path="/edit_question"
              render={props => {
                return (
                  <Edit
                    getQuestions={this.getQuestions}
                    question={this.state.questions[this.state.index]}
                    {...props}
                  />
                )
              }}
            />

            <Route
              path="/add_question"
              render={props => {
                return <Add {...props} getQuestions={this.getQuestions} />
              }}
            />
            <Route
              path="/"
              render={props => {
                return (
                  <Home
                    getQuestions={this.getQuestions}
                    newQuestion={this.newQuestion}
                    question={this.state.questions}
                    index={this.state.index}
                    {...props}
                  />
                )
              }}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
