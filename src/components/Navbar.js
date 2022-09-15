import React from "react";
import profilePic from "../images/profilePic.JPG";
import course from "../images/course.png";
import grade from "../images/grade.png";
import calendar from "../images/calendar.png";
import Community from "../images/community.png";

export default function Navbar() {
    return(
        <div className="nav-bar">
            <div className="profile-pic">
                <img src={profilePic} alt="profile-picture" className="my-pic" />
                <p className="name"></p>
                <p className="univ-name"></p>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a className="nav-li"><img src={course} className="li-icon" alt="icon" />Courses</a></li>
                    <li><a className="nav-li"><img src={grade} className="li-icon" alt="icon" />Grades</a></li>
                    <li><a className="nav-li"><img src={calendar} className="li-icon" alt="icon" />Schedule</a></li>
                    <li><a className="nav-li"><img src={Community} className="li-icon" alt="icon" />Community</a></li>
                </ul>
            </div>
        </div>
    )
}