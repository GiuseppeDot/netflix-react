import { Component } from "react";
import { Card } from "react-bootstrap";

class CustomFooter extends Component {
  render() {
    return (
      <Card className=" px-5 text-start mt-5 bg-black text-white">
        <Card.Header className="text-center">Contattaci</Card.Header>
        <Card.Body className="d-flex justify-content-around footer-settings mx-auto">
          <div>
            <Card.Title>Support</Card.Title>
            <Card.Text>Settings</Card.Text>
            <Card.Text>Settings</Card.Text>
            <Card.Text>Settings</Card.Text>
            <Card.Text>Settings</Card.Text>
          </div>
          <div>
            <Card.Title>Support</Card.Title>
            <Card.Text>Settings</Card.Text>
            <Card.Text>Settings</Card.Text>
            <Card.Text>Settings</Card.Text>
            <Card.Text>Settings</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className=" text-white text-center fs-3">
          {new Date().getDate()} - {new Date().getDay() + 6} -{" "}
          {new Date().getFullYear()}
        </Card.Footer>
      </Card>
    );
  }
}

export default CustomFooter;
