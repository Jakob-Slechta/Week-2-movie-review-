import React from "react";
import ReviewList from "./review-list";
import Stars from "./star-rating";
import UserReview from "./user-review";


export default class Review extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            reviewPara: props.reviewPara,
            starsGiven: props.starsGiven

        }
    }
    render() {
       let dieHardReview = {
            username: "Angelo",
            reviewPara: "It's the best christmas movie of all time, fight me.",
            starsGiven: <Stars idx="5" />
           }
           
    return (
        <div id="reviews">
        <div className="card">
            <h4 className="card-title">
            {dieHardReview.username}'s Review!
            </h4>
            <p>
                {dieHardReview.reviewPara}
            </p>
            <div className="card-footer">
                {dieHardReview.starsGiven}
                </div>
            </div>
            <UserReview />
            </div>
    );
    }
}