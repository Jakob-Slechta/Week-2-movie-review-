import React from "react";
import Stars from "./star-rating";


export default class UserReview extends React.Component {
    render(){
        let reviewDiv = document.getElementById("reviews")
       function pushUserReview() {
            document.getElementById("reviews").prepend(
                `
                <div className="card">
                <h4 className="card-title">
                {userReviewUsername}'s Review!
                </h4>
                <p>
                    {userReviewReviewPara}
                </p>
                <div className="card-footer">
                    {starsGiven}
                    </div>
                </div>`
            )
            document.getElementById("userReviewUsername").innerHTML = "";
            document.getElementById("userReviewReviewPara").innerHTML = "";
        };

        return(
            <div>
            <input type="text" placeholder="Username" id="userReviewUsername">

            </input>
            <input type="text" placeholder="Write your review" id="userReviewReviewPara">
            </input>
            <Stars />
            <button onClick="pushUserReview()">Submit</button>
            </div>
            
        )
    }
}