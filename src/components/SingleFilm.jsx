import { Card, Col } from "react-bootstrap";
import { Component } from "react";

class SingleFilm extends Component {
  render() {
    return (
      <Col xs={6} md={4} lg={3}>
        <Card className="card-size bg-black text-white mb-3 h-100">
          <Card.Img
            className="film-img"
            variant="top"
            src={this.props.film.Poster}
          />
          <Card.Body>
            <Card.Title>{this.props.film.Title}</Card.Title>
            <Card.Text>
              {this.props.film.Type + " - " + this.props.film.Year}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleFilm;
