import React, { Component } from "react";
import "./App.css";
import {
  Link,
  Route,
  Switch
} from "react-router-dom";
import Add from "../Questions/Add";
import Home from "./Home"
import { Navbar, Nav } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      index: 4
    };
  }

  componentDidMount() {
    this.getQuestions();
  }

  newQuestion = () => {
    this.setState({
      index: Math.floor(Math.random() * this.state.questions.length)
    });
  };

  getQuestions = () => {
    fetch("http://localhost:3001/api/questions")
      .then(response => response.json())
      .then(questions =>
        this.setState({
          questions: questions
        })
      );
  };

  render() {
    return (
      <div className="App">
        <header>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">devHelp.io</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav />
              <Nav pullRight>
                <Navbar.Brand>
                <Link to="/add_question">Add Question</Link>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          ;
        </header>
        <main>
       
          {/* <Add /> */}
          <Switch>
            <Route
              path="/add_question"
              render={props => {
                return <Add {...props} />;
              }}
            />
            <Route 
            path="/"
            render={props => {
              return <Home newQuestion={this.newQuestion} question={this.state.questions} index={this.state.index} {...props} />
            }}
          />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
