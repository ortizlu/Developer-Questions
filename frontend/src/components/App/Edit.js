import React, { Component } from 'react'
import axios from 'axios'
import '../Questions/Question.css'
import { Link } from 'react-router-dom'
import { FormControl, Button } from 'react-bootstrap'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: this.props.question.question || 'potato',
      answer: this.props.question.answer || 'potato'
    }
  }

  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateQuestion = e => {
    e.preventDefault()
    this.props.history.push('/')
    axios
      .put(
        'http://localhost:3001/api/questions/' + this.props.question._id,
        this.state
      )
      .then(response => {
        console.log(response)
        this.props.getQuestions()
      })
      .catch(error => {
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
            name="question"
            onChange={this.onChangeText}
            value={this.state.question}
          />
          <label>Answer</label>
          <FormControl
            type="text"
            name="answer"
            onChange={this.onChangeText}
            value={this.state.answer}
          />
          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.updateQuestion}
          >
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

Edit.defaultProps = {
  question: {
    question: '',
    answer: ''
  }
}

export default Edit
