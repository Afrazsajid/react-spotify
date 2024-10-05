import React from "react";


const LikeButton = ({ liked, setLiked }) => {
  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-button" onClick={handleLike}>
      {liked ? <i className="ri-heart-fill"></i> : <i className="ri-heart-line"></i>}
    </div>
  );
};

export default LikeButton;
