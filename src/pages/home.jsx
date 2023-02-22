import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Layout/Header";
import UserList, { CardsList, Cardstest, UserData } from "../components/users";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserForm, { FlavorForm } from "../components/userpost";
import { LoginForm } from "../components/login";

const Counter = ({ count, clickHander }) => {
  return (
    <div className="counter">
      {count > 1 && <p>Count: {count}</p>}
      <button className="btn btn-primary" onClick={clickHander}>
        Count Up
      </button>
    </div>
  );
};

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      users: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps ");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" getSnapshotBeforeUpdate ");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(" componentDidUpdate ");
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        this.setState({
          ...this.state,
          users: response.data.results,
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClick() {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <p>I'm from class Component</p>
        <h1>Counter {this.state.counter}</h1>
        <button className="btn btn-secondary" onClick={this.handleClick}>
          Add Counter
        </button>
        {this.state.users.length > 0 && (
          <div>
            <Container>
              <Row>
                {this.state.users.map((user) => {
                  return (
                    <UserData
                      email={user.email}
                      name={user.name.first}
                      picture={user.picture.large}
                    />
                  );
                })}
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

const Home = () => {
  const title = "This is a new title";

  return (
    <div>
      <Header title={title} />
      <LoginForm />
      <ClassComponent />
      <FlavorForm />
    </div>
  );
};

export default Home;
