import Cookies from "js-cookie";
import React, { useState } from "react";

export default function CreatePlaylist() {

    // gets data from inputs
    async function CreatePlaylistRequest() {
        let data = {
            title: document.getElementById("titleInputP").value,
            description: document.getElementById("descriptionInput").value,
            isPublic:
                document.getElementById("isPublicInput").checked
        };

        // sends to backend
        let response = await fetch(
            `https://part-b-server.onrender.com/api/playlists/`,
            {
                method: "POST",
                body: JSON.stringify(await data),
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );


        const objResponse = await response.json();
        console.log(await objResponse);

        // on success reloads the page
        if (response.status == 201) {
            location.href = location.href;
        }
    }
    return (
        <div>
            <div className="centererAddSong">
                <div className="createPlaylistBox">
                    <form className="createPlaylistForm">
                        <p>Title</p>
                        <input
                            className="createPlaylistInput"
                            type="text"
                            id="titleInputP"
                            name="title"
                            placeholder="Title"
                        ></input>
                        <p>Artist</p>
                        <input
                            className="createPlaylistInput"
                            type="text"
                            id="descriptionInput"
                            name="description"
                            placeholder="Description"
                        ></input>
                        <div className="makePublic">
                            <input
                                className="createPlaylistInput"
                                type="checkbox"
                                id="isPublicInput"
                                name="isPublic"
                                defaultChecked
                            ></input>
                            <label htmlFor="isPublicInput">Make Public?</label>
                        </div>

                        <button
                            className="createPlaylistInput"
                            onClick={() => {
                                CreatePlaylistRequest();
                            }}
                            type="button"
                        >
                            Create Playlist
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
