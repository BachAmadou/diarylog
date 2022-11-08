import React from "react";
import world from "../images/world.png";
import cocktail from "../images/cocktail.png";
import pokeball from "../images/pokeball.png";
import image from "../images/image.png";

export default function RightSideBar() {
    return(
        <div className="right-side-bar">
            <div className="nav-items">
                <ul>
                    <li><a href="/tourism" className="nav-li"><img src={world} className="li-icon" alt="icon" />Tourism</a></li>
                    <li><a href="/cocktail" className="nav-li"><img src={cocktail} className="li-icon" alt="icon" />Cocktails</a></li>
                    <li><a href="/game" className="nav-li"><img src={pokeball} className="li-icon" alt="icon" />Game</a></li>
                    <li><a href="/gallery" className="nav-li"><img src={image} className="li-icon" alt="icon" />Gallery</a></li>
                    {/* <li><a href="/community" className="nav-li"><img src={} className="li-icon" alt="icon" />Community</a></li> */}
                </ul>
            </div>
        </div>
    )
}