import React from "react";


const SongSlider = ({ currentTime, duration, handleSeek }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleChange = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    handleSeek(seekTime);
  };

  return (
    <div className="progress-container">
      <span>{formatTime(currentTime)}</span>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100}
        onChange={handleChange}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};

export default SongSlider;
