

import SongUi from "./components/songUI"
import './App.css'

import SearchBar from './SearchBar'

function App() {
  const song = {
    title: "Blinding Lights",
    artist: "The Weeknd",
    albumCover: "https://c.saavncdn.com/172/Shayad-Film-Version-From-Love-Aaj-Kal--Hindi-2021-20210325204139-500x500.jpg",
    url: "https://pagalfree.com/musics/192-Shayad%20(Reprise)%20-%20Love%20Aaj%20Kal%20192%20Kbps.mp3",
    duration: 200, // duration in seconds
  };


  return (
    <>
    <SearchBar/>
    <SongUi song={song}/>

    </>
  )
}

export default App
