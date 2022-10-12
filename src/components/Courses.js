import React from "react";

export default function Courses() {
    return(
        <div className="courses">
            <h2>Your course registration deadline is approaching</h2>
            <div className="courses-content">
                <p className="course-item">WEB-100</p>
                <p className="course-item">WEB-200</p>
                <p className="course-item">CS-100</p>
                <p className="course-item">CS-200</p>
                <p className="course-item">ART-301</p>
                <p className="course-item">PE-100</p>
                <p className="course-item">DB-400</p>
                <p className="course-item">HST-102</p>
                <p className="course-item">WIN-202</p>
                <p className="course-item">DM2-303</p>
                <p className="course-item">PHP-200</p>
                <p className="course-item">JS-300</p>
            </div>

            <div className="course-options">
                <input type="button" className="course-btn" value="Choose courses" />   
                <input type="button" className="course-btn" value="Drop courses" />  
            </div> 
        </div>
    )
}