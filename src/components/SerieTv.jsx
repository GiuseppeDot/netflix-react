import { useState } from "react";

const SerieTv = (props) => {
  const [serieTv, setSerieTv] = useState();

  return fetch("http://www.omdbapi.com/?apikey=be0ad7de&s=Disney");
};
