import React from "react";
import Stars from "./star-rating";
import UserReview from "./user-review";

export default class EvaReview extends React.Component {
    render(){
        let endEvaReview = {
            username: "Angelo",
            reviewPara: "This movie was weird and the first scene scarred me for life. Pretty good.",
            starsGiven: <Stars idx="3" />
           }

           return(
            <div id="reviews">
            <div className="card">
            <h4 className="card-title">
            {endEvaReview.username}'s Review!
            </h4>
            <p>
                {endEvaReview.reviewPara}
            </p>
            <div className="card-footer">
                {endEvaReview.starsGiven}
                </div>
            </div>
            <UserReview />
            </div>
           )
    }
}