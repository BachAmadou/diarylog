import React from "react";
import { useEffect, useState } from "react";

export default function Community() {

    const [user, setUser] = useState([]);
    // https://jsonplaceholder.typicode.com/users/

    const getUser = () => {
        fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then((data) => {
            console.log(data.results[0]);
            setUser(data.results[0]);
        });
    };

    useEffect(() => {
        getUser();
    }, [])
         
    return(
        <div>
            <h2>Other members of the community</h2>
            <div className="form">
                <ul>
                    {/* {user.map(member => {
                        return (
                            <div key={member.id}>
                            <p>{member.username}</p>
                            <p>{member.email}</p>
                            <p>{member.website}</p>
                            </div>
                        )
                    })} */}

                    {/* if user.picture is present then show me the image tag or image */}
                    { user.picture && <img src={user.picture.thumbnail} alt="user" /> } 
                    {user.name && user.name.first}
                    
                </ul>
                <button className="btn-form" onClick={getUser}>Search members</button>
            </div>
        </div>
    )
}