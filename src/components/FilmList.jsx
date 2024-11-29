import { Container, Row } from "react-bootstrap";
import SingleFilm from "../components/SingleFilm";

const FilmList = (props) => {
  return (
    <Container>
      <Row className="gy-3">
        {props.FilmList.map((oneFilm) => {
          return <SingleFilm key={oneFilm.imdbID} film={oneFilm} />;
        })}
      </Row>
    </Container>
  );
};

export default FilmList;
