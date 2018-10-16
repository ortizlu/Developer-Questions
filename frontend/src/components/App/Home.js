
import React, { Component } from 'react';
import Question from '../Questions/Question'
import { Button }  from "react-bootstrap";

class Home extends Component {

    render() {
        return (
            <div>
            <Question question={this.props.question[this.props.index]} ></Question>
            <Button onClick={this.props.newQuestion} bsStyle="primary" bsSize="large">
                New Random Question
            </Button>
            </div>
        );
    }
}

export default Home;