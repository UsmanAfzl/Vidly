import React, { Component } from "react";
import { getMovies } from "../services/fakeGenreService";
class Table extends Component {
  state = { movie: getMovies() };
  render() {
    return <h1>Hello world</h1>;
  }
}

export default Table;
