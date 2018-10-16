import React, { Component } from 'react'
import './App.css'
import Question from '../Questions/Question'
import Add from '../Questions/Add'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'

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
        <header>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">devHelp.io</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav />
              <Nav pullRight>
                <NavItem eventKey={2} href="#">
                  Add Question
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          ;
        </header>
        <main>
          <Question question={this.state.questions[this.state.index]} />
          <Button onClick={this.newQuestion} bsStyle="primary" bsSize="large">
            New Question
          </Button>
          {/* <Add /> */}
        </main>
      </div>
    )
  }
}

export default App
