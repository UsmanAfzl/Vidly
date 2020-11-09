import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
class MoviesTable extends Component {
  columns = [
  { path: "title", label: "Title", content:movie=><Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like onClick={() => this.props.onLike(movie)} Liked={movie.liked} />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
