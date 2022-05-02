import React from "react";

const MyProfileTitle = ({ svgProfile, editimg }) => {
  return (
    <div className="profile_title">
      <div className="left">
        <img src={svgProfile} alt="" />
        <span>My Profile</span>
      </div>
      <div className="right">
        <img src={editimg} alt="" />
      </div>
    </div>
  );
};

export default MyProfileTitle;
