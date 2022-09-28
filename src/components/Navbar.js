import React from "react";
import profilePic from "../images/profilePic.JPG";
import course from "../images/course.png";
import grade from "../images/grade.png";
import calendar from "../images/calendar.png";
import team from "../images/team.png";
import home from "../images/home.png"

export default function Navbar() {
    return(
        <div className="nav-bar">
            <div className="profile-pic">
                <img src={profilePic} alt="profile-picture" className="my-pic" />
                <p className="name">Bachir Amadou</p>
                <p className="univ-name">McGill University</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="/home" className="nav-li"><img src={home} className="li-icon" alt="icon" />Home</a></li>
                    <li><a href="/courses" className="nav-li"><img src={course} className="li-icon" alt="icon" />Courses</a></li>
                    <li><a href="/grades" className="nav-li"><img src={grade} className="li-icon" alt="icon" />Grades</a></li>
                    <li><a href="/schedule" className="nav-li"><img src={calendar} className="li-icon" alt="icon" />Schedule</a></li>
                    <li><a href="/community" className="nav-li"><img src={team} className="li-icon" alt="icon" />Community</a></li>
                </ul>
            </div>
        </div>
    )
}