import React from "react";
 // Add the common CSS here

const SongControls = ({ isPlaying, handlePlayPause }) => {
  return (
    <div className="controls">
      <button className="prev-btn">
        <i className="ri-skip-back-mini-line"></i>
      </button>
      <button onClick={handlePlayPause} className="play-pause-btn">
        {isPlaying ? <i className="ri-pause-circle-line"></i> : <i className="ri-play-circle-line"></i>}
      </button>
      <button className="next-btn">
        <i className="ri-skip-forward-mini-line"></i>
      </button>
    </div>
  );
};

export default SongControls;
