import React from "react";
import "./pas.scss";
import svg from "../../../../assets/ProfileIconImages/changePas.svg";
const ChangePassword = () => {
  
  return (
    <div className="profile_container change_password_profile_container">
      <div className="profile_title">
        <div className="left">
          <img src={svg} alt="" />
          <span>Change Password</span>
        </div>
      </div>
      <div className="profile_body last-create">
        <div class="address-groups">
          <div class="address-group">
            <label for="">
              Email<span>*</span>{" "}
            </label>
            <input type="text" placeholder="Email" />
          </div>
          <div class="address-group">
            <label for="">
              Older Code<span>*</span>{" "}
            </label>
            <input type="number" placeholder="789023" />
          </div>
          <div class="address-group">
            <label for="">
              New Code<span>*</span>{" "}
            </label>
            <input type="number" placeholder="123546" />
          </div>
          <div class="address-group">
            <label for="">
              Repeat New Code<span>*</span>{" "}
            </label>
            <input type="number" placeholder="123546" />
          </div>
        </div>
        <div className="btn">
          <button>
            <p>Confirm</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
