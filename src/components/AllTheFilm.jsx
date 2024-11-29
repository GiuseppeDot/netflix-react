// import { Container, Row, Col } from "react-bootstrap"

// const AllTheFilm = (props) => {
//     return(
//         <Container>
//             <Row>
//                 {

//                 }
//             </Row>
//         </Container>
//     )
// }

import { Component } from "react";
import FilmList from "../components/FilmList";
class AllTheFilm extends Component {
  state = {
    films: [],
  };

  getFilms = () => {
    fetch(this.props.fetch)
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("ERRORE NELLA RICEZIONE DEI DATI");
        }
      })
      .then((arrayOfFilm) => {
        console.log("arrayOfFilms", arrayOfFilm);
        this.setState({
          films: arrayOfFilm.Search,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return <FilmList FilmList={this.state.films} />;
  }
}

export default AllTheFilm;
