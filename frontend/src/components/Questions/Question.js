import React, { Component } from 'react'
import './Question.css'

class Question extends Component {
  constructor() {
    super()
    this.state = {
      click: false
    }
  }

  next = () => {
    if (this.state.click === false) {
      this.setState({
        click: true
      })
    } else {
      this.setState({
        click: false
      })
    }
  }

  render() {
    return (
      <div className="qa">
        <h1 onClick={this.next}>
          {' '}
          {this.state.click
            ? this.props.question.answer
            : this.props.question.question ||
              'What is HTML and what problem does it solve?'}{' '}
        </h1>
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
