import React from "react";
import EvaReview from "./eva-review";

export default class MovieTwo extends React.Component {
    render() {
        let movieTwo = {
            title: "The End of Evangelion",
            movieCover: "https://m.media-amazon.com/images/M/MV5BMDAxYzU2YjEtNmNjNS00OGJlLTg3MzgtNzAwN2E1ZWFiYTg5XkEyXkFqcGdeQXVyNTkwNzYyODM@._V1_FMjpg_UX1000_.jpg",
            movieSynopsis: "A young man recconects with his father and learns how to drive."
        };
        return(
            
            <div className="container"> 
        <h3>
           <b>{movieTwo.title}</b>
        </h3>
        <img src={movieTwo.movieCover}>
        </img>
        <p>
            {movieTwo.movieSynopsis}
        </p>
        <div className="container">
        <EvaReview />
        </div>
        </div>
        
        )
    }
}