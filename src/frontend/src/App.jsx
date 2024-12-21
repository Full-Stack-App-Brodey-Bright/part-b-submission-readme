import React, { useState, createContext, Provider, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Connect from "./pages/Connect";
import Auth from "./pages/Auth";
import Cookies from "js-cookie";
import Dashboard from "./pages/Dashboard";
import Playlists from "./components/Playlists";
import Playlist from "./pages/Playlist";
import Player from "./components/Player";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import LibraryMobile from "./pages/LibraryMobile";
import SearchMobile from "./pages/SearchMobile";

function App() {
    useEffect(() => {
        console.log(Cookies.get("token"));
    }, []);

    const [playlist, setPlaylist] = useState([]);
    const [url, setUrl] = useState("");
    const [playerHidden, setPlayerHidden] = useState(true);
    const [searchType, setSearchType] = useState("Playlists");
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route
                        path="/dashboard"
                        element={
                            <Dashboard
                                setPlayerHidden={setPlayerHidden}
                                setUrl={setUrl}
                                searchType={searchType}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                setSearchType={setSearchType}
                            />
                        }
                    />
                    <Route path="/playlists" element={<Playlists />} />
                    <Route
                        path="/playlist/:id"
                        element={
                            <Playlist
                                playlist={playlist}
                                setPlaylist={setPlaylist}
                                setUrl={setUrl}
                                url={url}
                                setPlayerHidden={setPlayerHidden}
                            />
                        }
                    />
                    <Route path="/profile/:id" element={<Profile />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/library" element={<LibraryMobile />} />
                    <Route
                        path="/search"
                        element={
                            <SearchMobile
                                setPlayerHidden={setPlayerHidden}
                                setUrl={setUrl}
                                searchType={searchType}
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                setSearchType={setSearchType}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
            <Player
                url={url}
                setUrl={setUrl}
                playlist={playlist}
                setPlaylist={setPlaylist}
                playerHidden={playerHidden}
                setPlayerHidden={setPlayerHidden}
            />
        </>
    );
}

export default App;
