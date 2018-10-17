import React, { Component } from 'react'
import axios from 'axios'
import '../Questions/Question.css'
import { Link } from 'react-router-dom'
import { FormControl, Button } from 'react-bootstrap'

class Add extends Component {
  constructor() {
    super()
    this.state = {
      question: '',
      answer: ''
    }
  }

  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addQuestion = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/questions', this.state)
      .then(response => {
        this.props.getQuestions()
        this.props.history.push('/')
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <form>
          <label>Question</label>
          <FormControl
            type="text"
            placeholder="Enter a new question"
            name="question"
            onChange={this.onChangeText}
            value={this.state.question}
          />
          <label>Answer</label>
          <FormControl
            placeholder="Enter an answer"
            type="text"
            name="answer"
            onChange={this.onChangeText}
            value={this.state.answer}
          />
          <Button bsStyle="primary" bsSize="large" onClick={this.addQuestion}>
            Submit
          </Button>
        </form>

        <nav className="sticky-bottom">
          <li>
            <Link to="/">Back</Link>
          </li>
        </nav>
      </div>
    )
  }
}

export default Add
