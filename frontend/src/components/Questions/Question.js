import React, { Component } from 'react'
import './Question.css'

class Question extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="qa">
        <h1>
          {' '}
          {this.props.question.question ||
            'What is HTML and what problem does it solve?'}{' '}
        </h1>
        {/* <p> Answer: {this.props.question.answer}</p> */}
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
