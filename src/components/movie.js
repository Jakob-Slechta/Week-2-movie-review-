import React from "react";
import Review from "./review";

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            movieCover: props.movieCover,
            movieSynopsis: props.movieSynopsis
        };
    }

    render() {

        
        const movieOne = {
            title: "Die Hard",
            movieCover: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            movieSynopsis: "A cop comes home for a holiday party where he recconects with his wife in what is definitely a christmas movie."
        };
        
    

   
    
    return (
        <div className="container"> 
        <h3>
           <b>{movieOne.title}</b>
        </h3>
        <img src={movieOne.movieCover}>
        </img>
        <p>
            {movieOne.movieSynopsis}
        </p>
        <div className="container">
        <Review />
        </div>
        </div>
        
    )
    }
}