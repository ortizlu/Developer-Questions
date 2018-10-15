import React, { Component } from 'react';
import './Question.css'

class Question extends Component {
    render() {
        return (
            <div className="qa">
                <p> Question: </p>
                <p> Answer: </p>
            </div>
        );
    }
}

export default Question;