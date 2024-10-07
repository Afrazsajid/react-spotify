import SongUi from "./components/songUI";
import './App.css';
import SearchBar from './SearchBar';
import { useState } from "react";

async function fetchSongDetails(song_name) {
  const querystring = new URLSearchParams({ q: song_name, onlyLinks: "false" });

  const headers = {
    "X-RapidAPI-Key": "200a240b37msh0f4fa8617df30ecp11a02ejsnb35f41277ffb",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      `https://spotify81.p.rapidapi.com/download_track?${querystring}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const data = await response.json();

    // Format the data
    const formattedSong = {
      title: data.name,
      artist: data.artists.items.map((artist) => artist.profile.name).join(", "),
      albumCover: data.albumOfTrack.coverArt.sources[0].url,
      url: data.youtube.download[0].url,
    };

    return formattedSong;
  } catch (error) {
    console.error("Error fetching song details:", error);
    return null;
  }
}

function App() {
  const [song, setsong] = useState({
    title: "Shayad",
    artist: "Arijit Singh",
    albumCover: "https://c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg",
    url: "https://pagalfree.com/musics/128-Pehle Bhi Main - Animal 128 Kbps.mp3",
  });

  const onsearch = async (q) => {
    setsong({
      title: "Shayad",
      artist: "Arijit Singh",
      albumCover: "https://c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg",
      url: "https://pagalfree.com/musics/128-Pehle Bhi Main - Animal 128 Kbps.mp3",
    })
    const songDetails = await fetchSongDetails(q);

    if (songDetails) {
      setsong(songDetails);
    } else {
      console.log("Error fetching song details or song not found.");
    }
  };

  return (
    <>
      <SearchBar onSearch={onsearch} />
      <SongUi song={song} />
    </>
  );
}

export default App;
