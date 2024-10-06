import React, { useState, useRef } from "react";

import SongControls from "./SongControls";
import SongSlider from "./SongSlider";
import LikeButton from "./LikeButton";

function audodue(duration="0:0"){
  return duration
}



const SongPlayer = ({ song }) => {

  const handleMeta = () => {
    setduration(audioRef.current.duration);
    console.log("h")
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [liked, setLiked] = useState(false);
  const audioRef = useRef(null);

  let [durationn,setduration] =useState(8)

  // Toggle play/pause
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar and time tracker
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Seek the song
  const handleSeek = (seekTime) => {
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  

  return (
    <>
    
    <div className="song-player">
      <div className="album-cover">
        <img src={song.albumCover} alt="Album Cover" />
      </div>
      <div className="song-info">
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
      </div>

      <audio
        ref={audioRef}
        src={song.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMeta}
      ></audio>


      <SongControls isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
      <SongSlider
        currentTime={currentTime}
        duration={durationn}
        handleSeek={handleSeek}
      />
      <LikeButton liked={liked} setLiked={setLiked} />
    </div>
    </>
  );
};

export default SongPlayer;
