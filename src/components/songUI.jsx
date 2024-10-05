import React, { useState, useRef } from "react";

import SongControls from "./SongControls";
import SongSlider from "./SongSlider";
import LikeButton from "./LikeButton";

const SongPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [liked, setLiked] = useState(false);
  const audioRef = useRef(null);

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
      ></audio>

      {/* Modularized components */}
      <SongControls isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
      <SongSlider
        currentTime={currentTime}
        duration={song.duration}
        handleSeek={handleSeek}
      />
      <LikeButton liked={liked} setLiked={setLiked} />
    </div>
  );
};

export default SongPlayer;
