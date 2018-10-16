import React, { Component } from 'react'
import Question from '../Questions/Question'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <Question question={this.props.question[this.props.index]} />
        <Button
          onClick={this.props.newQuestion}
          bsStyle="primary"
          bsSize="large"
        >
          New Random Question
        </Button>

        <Link to="/edit_question">
          <Button bsStyle="primary" bsSize="large">
            Edit Question
          </Button>
        </Link>
      </div>
    )
  }
}

export default Home
