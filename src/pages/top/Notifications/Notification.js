import React from "react";
import "./Notification.scss";
import { notification_Data } from "../../../constants/notifications";
import { Link } from "react-router-dom";
import Bell from "../../../assets/headerLinksImage/Bell.svg";
const Notification = () => {
  return (
    <div className="main-notifications system_main">
      <div className="system_container">
        <div className="top_balance_system top_system">
          <div className="top_balance_system_icon top_system_icon">
            <img src={Bell} alt="" />
          </div>
          <p className="top_balance_system_title top_system_title">
            Notifications
          </p>
        </div>
        <div className="notifications">
          {notification_Data.map((item) => {
            return (
              <Link to={`/details/${item.id}`} key={item.id}>
                <div className="box-notification">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="text-box">
                    <p className="title">{item.title}</p>
                    <div className="svg-span">
                      <img src={item.svg} alt="" />
                      <span>{item.date}</span>
                      <span>{item.time}</span>
                    </div>

                    <p>{item.text.substring(0, 269)}...</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notification;
