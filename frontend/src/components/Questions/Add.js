import React, { Component } from 'react'

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

  addQuestion = () => {
    fetch('http://localhost:3001/api/questions', {
      method: 'post',
      body: JSON.stringify({ question: 1, answer: 2 })
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Add
