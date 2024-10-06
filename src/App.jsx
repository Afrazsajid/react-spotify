

import SongUi from "./components/songUI"
import './App.css'

import SearchBar from './SearchBar'
import { useState } from "react";

function App() {
  const [song ,setsong]= useState({
    title: "Shayad",
    artist: "Arijit Singh",
    albumCover: "https://c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg",
    url: "https://pagalfree.com/musics/128-Pehle Bhi Main - Animal 128 Kbps.mp3",
     
  });

  const onsearch= (q) =>{
    console.log("k")
    setsong({
      title: "Shayad",
      artist: q,
      albumCover: "https://c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg",
      url: "https://pagalfree.com/musics/128-Pehle Bhi Main - Animal 128 Kbps.mp3",
       
    })

  }


  return (
    <>
    <SearchBar onSearch={onsearch}/>
    <SongUi song={song}/>

    </>
  )
}

export default App
