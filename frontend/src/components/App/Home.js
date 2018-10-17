import React, { Component } from 'react'
import Question from '../Questions/Question'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../Questions/Question.css'

class Home extends Component {
  deleteQuestion = e => {
    e.preventDefault()
    axios
      .delete(
        'http://localhost:3001/api/questions/' +
          this.props.question[this.props.index]._id
      )
      .then(response => {
        console.log(response)
        this.props.getQuestions()
        this.props.history.push('/')
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Question question={this.props.question[this.props.index]} />
        <nav className="sticky-bottom">
          <li>
            <Link to="/edit_question">Edit</Link>
          </li>
          <li onClick={this.props.newQuestion}>Random</li>

          <li onClick={this.deleteQuestion}>Delete</li>
        </nav>
      </div>
    )
  }
}

Home.defaultProps = {
  question: {
    _id: 1234,
    question: '',
    answer: ''
  }
}

export default Home
