import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Bell from "../../../../assets/headerLinksImage/Bell.svg";

import "./Details.scss";
const Details = () => {
  let { id } = useParams();

  const { notification_Data } = useSelector(
    (state) => state.notificationReducer
  );

  let notification = notification_Data.find((a) => a.id === Number(id));

  return (
    <div className="details_notification system_main">
      <div className="details_notification_container system_container">
        <div className="top_balance_system top_system">
          <div className="top_balance_system_icon top_system_icon">
            <img src={Bell} alt="" />
          </div>
          <p className="top_balance_system_title top_system_title">
            Notifications
          </p>
        </div>
        <div className="details">
          <div className="image">
            <img src={notification.image} />
            <p className="title">{notification.title}</p>
            <div className="svg-span">
              <img src={notification.svg} />
              <span>{notification.date}</span>
              <span>{notification.time}</span>
            </div>
            <p>{notification.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
