import React, { Component } from 'react'
import axios from 'axios'

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
          <input
            type="text"
            name="question"
            onChange={this.onChangeText}
            value={this.state.question}
          />
          <label>Answer</label>
          <input
            type="text"
            name="answer"
            onChange={this.onChangeText}
            value={this.state.answer}
          />
          <button onClick={this.updateQuestion}>Submit</button>
        </form>
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
