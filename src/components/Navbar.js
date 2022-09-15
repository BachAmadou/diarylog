import React from "react";

export default function Navbar() {
    return(
        <div className="nav-bar">
            <div className="profile-pic">
                <img src="../images/profile-pic.jpg" alt="profile-picture" className="my-pic" />
                <p className="name"></p>
                <p className="univ-name"></p>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a className="nav-li"><img src="" className="li-icon" alt="icon" />Courses</a></li>
                    <li><a className="nav-li"><img src="" className="li-icon" alt="icon" />Grades</a></li>
                    <li><a className="nav-li"><img src="" className="li-icon" alt="icon" />Schedule</a></li>
                    <li><a className="nav-li"><img src="" className="li-icon" alt="icon" />Community</a></li>
                </ul>
            </div>
        </div>
    )
}