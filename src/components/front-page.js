import React from "react";
import MovieList from "./movie-list";
import Movie from "./movie";
import MovieTwo from "./movietwo";

export default class FrontPage extends React.Component{
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Movie Review Website!</h1>
    <p className="lead">The site where <b>YOU</b> are the best critic!</p>
    <MovieList />
   
  </div>
</div>

        )
    }
}