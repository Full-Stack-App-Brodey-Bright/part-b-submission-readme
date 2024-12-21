import React from "react";

// shows individual user components when searching for a user
export default function User({ username, followers, playlists, id }) {

    // sends user to the user profile onclick
    function goToProfile() {
        location.href = `/profile/${id}`;
    }

    return (
        <div className="userBox" onClick={goToProfile}>
            <h1>{username}</h1>
            <div className="userDetails">
                <h4>{followers} Followers</h4>
                <h4>{playlists} Playlists</h4>
            </div>
        </div>
    );
}
