import Cookies from "js-cookie";

    // adds song to a plsylist
    export default async function addSongRequest( tracks, title, artist, url, id ) {

        // gets the selected playlists tracks
        let newTracks = await tracks

        // removes track ids from request (it doesnt work without it)
        newTracks.forEach(element => {
            if (element._id) {
                delete element._id
            }
        });

        // adds the new track to the playlists tracks
        let data = {
            tracks: await newTracks.concat({
                title: title,
                artist: artist,
                url: url
            
        })};

        // sends the request
        let response = await fetch(`https://part-b-server.onrender.com/api/playlists/${id}`,
            {
                method: "PUT",
                body: JSON.stringify( await data ),
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const objResponse = await response.json()
        console.log(await objResponse)

        // loads the playlist
        if (response.status == 200) {
            location.href = `/playlist/${id}`
        }
    }

    // old add song UI for directly adding a song

    // return (
    //     <div>
    //         <div className="centererAddSong">
    //             <div className="addSongBox">
    //                 <button onClick={() => {setHidden(true)}}>Close</button>
    //                 <form className="addSongForm">
    //                     <p>Title</p>
    //                     <input
    //                         className="addSongInput"
    //                         type="text"
    //                         id="titleInput"
    //                         name="title"
    //                         placeholder="Title"
    //                     ></input>
    //                     <p>Artist</p>
    //                     <input
    //                         className="addSongInput"
    //                         type="text"
    //                         id="artistInput"
    //                         name="artist"
    //                         placeholder="Artist"
    //                     ></input>
    //                     <p>URL</p>
    //                     <input
    //                         className="addSongInput"
    //                         type="text"
    //                         id="urlInput"
    //                         name="url"
    //                         placeholder="URL"
    //                     ></input>

    //                     <button
    //                         className="addSongInput"
    //                         onClick={() => {addSongRequest()}}
    //                         type="button"
    //                     >
    //                         Add Song
    //                     </button>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // );

