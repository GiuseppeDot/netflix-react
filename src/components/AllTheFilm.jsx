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

import { useEffect, useState } from "react";
import FilmList from "../components/FilmList";
const AllTheFilm = (props) => {
  // state = {
  //   films: [],
  // };

  const [film, setFilm] = useState([]);

  const getFilms = () => {
    fetch(props.fetch)
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
        // this.setState({
        //   films: arrayOfFilm.Search,
        // });

        setFilm(arrayOfFilm.Search);
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  // componentDidMount() {
  //   this.getFilms();

  useEffect(() => {
    getFilms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <FilmList FilmList={film} />;
};

export default AllTheFilm;
