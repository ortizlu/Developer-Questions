import React, { Component } from 'react'
import './Question.css'

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="qa">
        <p> Question: {this.props.question.question || 'QUESTION'} </p>
        <p> Answer: {this.props.question.answer}</p>
      </div>
    )
  }
}

Question.defaultProps = {
  question: {
    question: '',
    answer: ''
  }
}

export default Question
