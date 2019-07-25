import { useState } from "react";
import React from "react";
import "../App/App.css"

function Button(){
    //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    let [homeScore, setHomeScore] = useState(0);
    let [awayScore, setAwayScore] = useState(0);

    let addHomeFieldGoal = () => setHomeScore(homeScore + 3);
    let addHomeTouchDown = () => setHomeScore(homeScore + 7);
    let addAwayFieldGoal = () => setAwayScore(awayScore + 3);
    let addAwayTouchDown = () => setAwayScore(awayScore + 7);
    return(
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={addHomeTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {addHomeFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={addAwayTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={addAwayFieldGoal}  className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    );
}

export default Button;