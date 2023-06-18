import React from "react";
import "./about.css"

export default function About(){
    return(
        <div className={"about_holder"}>
            <div className={"about_leftSide"}>
                <h1>
                    About me!
                </h1>
                <p>
                    I'm an experienced software engineer.
                </p>
            </div>

            <div className={"about_rightSide"}>
            </div>
        </div>
    )
}