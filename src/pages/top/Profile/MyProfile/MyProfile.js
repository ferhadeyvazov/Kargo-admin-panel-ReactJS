import React from "react";
import "./myprofile.scss";
import svgProfile from "../../../../assets/ProfileIconImages/myprofile.svg";
import editimg from "../../../../assets/ProfileIconImages/edit.svg";
import MyProfileBottom from "./MyProfileBottom";
import MyProfileTitle from "./MyProfileTitle";
import MyProfileMiddleInputs from "./MyProfileMiddleInputs";
const MyProfile = () => {

  return (
    <div className="profile_container my_profile_container">
      <MyProfileTitle
        editimg={editimg}
        svgProfile={svgProfile}
      />
      <div className="profile_body last-create">
        {/* //! radio buttons */}
        <MyProfileMiddleInputs />

        <MyProfileBottom />
      </div>
    </div>
  );
};

export default MyProfile;
