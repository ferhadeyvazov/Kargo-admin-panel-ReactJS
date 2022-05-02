import React, { useEffect } from "react";
import "./Header.scss";
import { HeaderIcon } from "../../../constants/headerIcon";
import User from "../../../assets/headerLinksImage/User.svg";
import Search from "../../../assets/headerLinksImage/Search.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Flags
//action creators
import {
  closeHeaderBar,
  openHeaderBar,
  setHeader_Active_icon,
} from "../../../redux/headertopbar/activTopBarAction";
import {
  setSideBarActive,
  closeSideBarAction,
} from "../../../redux/sidebar/sidebarActiton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Header = () => {
  const { linkPage, isHeaderOpen } = useSelector((state) => state.headerBar);
  //arranging language
  const { i18n, t } = useTranslation(["sidebar", "sidebar/linkSideBar", "pages/side/BalanceSystem/BakiyeYukle/BakiyeYukleMain.js"]);
  useEffect(() => {
    // console.log(localStorage.getItem("i18nextLng")?.length);
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (name) => {
    dispatch(setHeader_Active_icon(name));
    dispatch(setSideBarActive(""));
    dispatch(closeSideBarAction(false));
    dispatch(closeHeaderBar(false));
  };
  const statusOfHeaderBar = (par) => {
    dispatch(openHeaderBar(!isHeaderOpen));
    dispatch(closeSideBarAction(false));
  };
  //when we click set false (sidebar and topbar )
  const handleClickToDeirvlonProfile = (e) => {
    dispatch(setSideBarActive(""));
    navigate("profile");
    dispatch(setHeader_Active_icon(""));
  };

  //change language
  const handleLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    //geetingsidebarRouterName  and navigate it to that routername  whch we saved to localstorage in SideBar component
    let sidebarRouterLinkName =
      JSON.parse(localStorage.getItem("sideBarRouterName")) || "main-menu";
    console.log(t(`sidebar/linkSideBar:balance-system`));
    navigate(t(`sidebar/linkSideBar:${sidebarRouterLinkName}`)); //sidebarRouterler ucun ayriyetden dil acilib Her sidebara tikliyanda link adi degisir Ve o degisen link adinida referans alarag dil ayarlari yapilib
    // console.log(sidebarRouterLinkName);

    // console.log(t("sidebar/linkSideBar:site-usage"));
  };
  return (
    <header>
      <div>
        <div className="top-header">
          <div className="top-header-search">
            <input type="text" placeholder="Ara..." />
            {/* <i className="fas fa-search"></i> */}
            <img src={Search} alt="" />
          </div>
          <div className="top-header-user">
            <div
              style={{ zIndex: "10000" }}
              className={!isHeaderOpen ? "icons " : " hide"}
            >
              {HeaderIcon.map((icon) => {
                return (
                  <NavLink
                    onClick={() => handleClick(icon.linkPage)}
                    key={icon.id}
                    className={`${
                      icon.linkPage === linkPage ? "active" : "item"
                    }`}
                    to={`/${icon.linkPage}`}
                  >
                    <img src={icon.LinkIConClassName} alt="" key={icon.id} />
                  </NavLink>
                );
              })}
            </div>
            <div className="nav-item">
              {/* <div className="dropdown-btn">Choose One </div>
              <div className="dropdown-content">
                <div className="dropdown-item">{Usa} English</div>
                <div className="dropdown-item">Turkce</div>
              </div> */}
              <select
                name=""
                onChange={handleLanguage}
                id=""
                value={localStorage.getItem("i18nextLng")}
                className="drop-content"
              >
                <option value="tr">Türkçe</option>
                <option value="en">English</option>
              </select>
            </div>
            <div onClick={() => statusOfHeaderBar()} className="icons-burger">
              <i className={!isHeaderOpen ? "fas fa-bars" : "fas fa-times"}></i>
            </div>
            <div className="user" onClick={handleClickToDeirvlonProfile}>
              <span>Deirvlon</span>
              <img src={User} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// {
//   <div className="bottom-header">
//   <p>Welcome, Deirvlon</p>
//   <span>You have 24 notification</span>
// </div> 
// }
