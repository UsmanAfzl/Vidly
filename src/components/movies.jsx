import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete(item) {
    const movies = this.state.movies.filter((movie) => movie._id !== item._id);
    this.setState({ movies });
  }
  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movie.liked = !movie.liked;
    movies[index] = { ...movie };
    this.setState({ movies });
  }
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <React.Fragment>
        <p>There are currently {count} movies in database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    onClick={() => this.handleLike(movie)}
                    Liked={movie.liked}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
