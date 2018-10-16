import React, { Component } from 'react'
import axios from 'axios'

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
    this.props.history.push('/')
    axios.post('http://localhost:3001/api/questions', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
          <button onClick={this.addQuestion}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Add
