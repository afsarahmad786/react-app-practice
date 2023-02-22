import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsList = ({ email, name, picture }) => {
  return (
    <Container>
      <Row>
        <UserData email={email} name={name} picture={picture} />
      </Row>
    </Container>
  );
};

const UserData = ({ email, name, picture }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export { UserData, CardsList };
