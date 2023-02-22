import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Token = React.createContext("abc");

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    event.preventDefault();
    axios
      .post(
        "http://127.0.0.1:8000/api/login/",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        alert("Success");

        // console.log("resssssssssssssss", res.data.data.token);
      })
      .catch((err) => {
        alert("Andha Hai Kya Sahi Se Email Pass Bhar");

        console.log("errrrrrrrrr", err);
      });
    console.log("ttttttttttt", Token);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address </Form.Label>
          <Form.Control
            name="email"
            value={this.state.email}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={this.state.password}
            placeholder="Enter password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export { LoginForm };
