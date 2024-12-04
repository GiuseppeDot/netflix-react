import { Card, Col } from "react-bootstrap";

const SingleFilm = (props) => {
  return (
    <Col xs={6} md={4} lg={3}>
      <Card className="card-size bg-black text-white mb-3 h-100">
        <Card.Img className="film-img" variant="top" src={props.film.Poster} />
        <Card.Body>
          <Card.Title>{props.film.Title}</Card.Title>
          <Card.Text>{props.film.Type + " - " + props.film.Year}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleFilm;
