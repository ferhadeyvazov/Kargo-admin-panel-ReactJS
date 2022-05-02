import "./SideBar.scss";
import React from "react";
import logoImage from "../../../assets/sideBarMainImage/jpf.jpg";
import {
  MainSideBarLinks,
  sideBarIntegrations,
} from "../../../constants/sidebarLinks";

import Drop from "../SideBar/topsystem/tr.json"
//react redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//functions
import {
  closeSideBarAction,
  openSideBarAction,
  setSideBarActive,
} from "../../../redux/sidebar/sidebarActiton";
import { Link } from "react-router-dom";
import {
  closeHeaderBar,
  setHeader_Active_icon,
} from "../../../redux/headertopbar/activTopBarAction";
import { useTranslation } from "react-i18next";
import { selectSideBar } from "../../../redux/sidebar/sidebarReduser";
const SideBar = () => {
  const { activeSideBarName, isSideBarOpen } = useSelector(selectSideBar);
  const { t } = useTranslation(["sidebar", "sidebar/linkSideBar"]);
  const dispatch = useDispatch();

  //side open or close
  const statusOfSidebar = () => {
    // setOpenSidebar(!openSidebar);
    dispatch(openSideBarAction(!isSideBarOpen));
    dispatch(closeHeaderBar(false));
  };

  //when we click we change setActive navbar or sidebar
  const handleClick = (name) => {
    // eslint-disable-next-line no-useless-concat
    localStorage.setItem("sidebarKey", JSON.stringify(name));

    //setting side bar name to local storage and we will get it in header js in order to arrange router  language name
    localStorage.setItem("sideBarRouterName", JSON.stringify(name));
    dispatch(setSideBarActive(name));
    dispatch(setHeader_Active_icon(""));
    dispatch(closeSideBarAction(false));
    dispatch(closeHeaderBar(false));
  };

  // eger logged in olarsa  header ve sidebar sehfelere gecis yapilir
  return (
    <div className={isSideBarOpen ? "main-sidebar active" : "main-sidebar"}>
      <div className={"sidebar"}>
        <div className="sidebar_header_icon" onClick={statusOfSidebar}>
          {isSideBarOpen ? (
            <i className="fas fa-times-circle"></i>
          ) : (
            <i className="fas fa-chevron-circle-right"></i>
          )}
        </div>
        <div className="sidebar_header_logo">
          <img src={logoImage} alt="" />
        </div>
        <div className="sidebar_links">
          {/* <p>{`/${t("sidebar/linkSideBar:orders")}`}</p> */}
          {/* <p>{t(`sidebar/linkSideBar:${link.linkUrl}`)}</p> */}
          {MainSideBarLinks.map((link, index) => {
            return (
              <Link
                // to={`${link.linkUrl}`}
                // in order to change language route we need to add translate function
                to={t(`sidebar/linkSideBar:${link.linkUrl}`)}
                className={`${
                  link.linkName === activeSideBarName ? "link active" : "link"
                }`}
                key={link.id}
                onClick={() => handleClick(link.linkName)}
              >
                <span className="link_icon">{link.image}</span>
                <span className="link_name">{t(`${link.linkName}`)}</span>
                
                {
                  link.items ? 
                  <div className="dropbox">
                    {
                      link.items.map( (e, i) => (
                        <span key={i}>{t(`${e.items}`)}</span>
                      ))
                    }
                  </div>
                  :"" 
                }

                <span
                  className={`${
                    !isSideBarOpen
                      ? "link_outside_bar show"
                      : "link_outside_bar"
                  } ${link.linkName === activeSideBarName ? "active" : " "}
                `}
                  // className="link_outside_bar"
                >
                  {link.image}
                </span>
              </Link>
            );
          })}
        </div>
        {/* integratiosn link */}
        <p className="integration_text">
          {localStorage.getItem("i18nextLng") === "en"
            ? "İntegratİon"
            : "Entegrasyon"}
        </p>
        <div className="sidebar_integrations sidebar_links">
          {sideBarIntegrations.map((link) => {
            return (
              <Link
                to={t(`sidebar/linkSideBar:${link.linkUrl}`)}
                className={`${
                  link.linkName === activeSideBarName ? "link active" : "link"
                }`}
                key={link.id}
                onClick={() => handleClick(link.linkName)}
              >
                <span className="link_icon">{link.image}</span>

                {/* <span className="link_name">{link.linkName}</span> */}
                <span className="link_name">{t(`${link.linkName}`)}
                </span>
                <span
                  // className="link_outside_bar"
                  className={`${
                    !isSideBarOpen
                      ? "link_outside_bar show"
                      : "link_outside_bar"
                  } ${link.linkName === activeSideBarName ? "active" : " "}
                `}
                >
                  {link.image}
                </span>
                
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
