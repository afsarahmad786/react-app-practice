import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UserForm = () => {
  const handle = (event) => {
    alert("An essay was submitted: " + this.state.title);
    event.preventDefault();
  };
  return (
    <Form onSubmit={handle}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title </Form.Label>
        <Form.Control name="title" type="text" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description </Form.Label>
        <Form.Control name="body" type="text" placeholder="Enter Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Id</Form.Label>
        <Form.Control name="userid" type="text" placeholder="Enter UserId" />
      </Form.Group>

      <Button variant="primary" type="submit" id="formdata">
        Submit
      </Button>
    </Form>
  );
};

class FlavorForm extends React.Component {
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
    const title = event.target.title.value;
    const body = event.target.body.value;
    const userid = event.target.userid.value;

    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        userId: userid,
      })
      .then((res) => {
        console.log("resssssssssssssss", res);
      })
      .catch((err) => {
        console.log("errrrrrrrrr", err);
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title </Form.Label>
          <Form.Control
            name="title"
            value={this.state.title}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description </Form.Label>
          <Form.Control
            name="body"
            type="text"
            value={this.state.body}
            placeholder="Enter Description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            name="userid"
            type="number"
            value={this.state.userid}
            placeholder="Enter UserId"
          />
        </Form.Group>

        <Button variant="primary" type="submit" id="formdata">
          Submit
        </Button>
      </Form>
    );
  }
}

export { UserForm, FlavorForm };
