import React, { useState } from "react";
import Listicon from "../../../../../../assets/Popupicons/lists.svg";
import Rightclick from "../../../../../../assets/Popupicons/right-click.svg";
import Vector from "../../../../../../assets/Popupicons/vector.svg";
import List_2 from "../../../../../../assets/Popupicons/list_2.svg";
import List_3 from "../../../../../../assets/Popupicons/list_3.svg";
import "./Lists.css";
import OutsideClickHandler from "react-outside-click-handler";
import Storagelists from "./Storagelists.js";
import Localstorage from "./Productstorage.js";
function Lists(props) {
  const [locallist, setLocallist] = useState(false);
  const [storList, setStorList] = useState(false);
  return props.setList ? (
    <div className="lists">
      <div className="logo">
        <img className="icons" src={Listicon} alt="" />
      </div>
      <div className="listnames">
        <div className="list_1">
          <div className="list_name">
            <div className="list_logo">
              <img className="icons" src={Vector} alt="" />
            </div>
            <button>
              <h3>Add manually</h3>
            </button>
          </div>
          <img src={Rightclick} alt="" />
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            setStorList(false);
          }}>
          <div onClick={() => setStorList(!storList)} className="list_1">
            <div className="list_name">
              <div className="list_logo">
                <img className="icons" src={List_2} alt="" />
              </div>
              <button>
                <h3>Local storage list</h3>
              </button>
            </div>
            <img src={Rightclick} alt="" />
          </div>
        </OutsideClickHandler>

        <OutsideClickHandler
          onOutsideClick={() => {
            setLocallist(false);
          }}>
          <div onClick={() => setLocallist(!locallist)} className="list_1">
            <div className="list_name">
              <div className="list_logo">
                <img className="icons" src={List_3} alt="" />
              </div>
              <button>
                <h3>From my products list</h3>
              </button>
            </div>
            <img src={Rightclick} alt="" />
          </div>
        </OutsideClickHandler>
      </div>
      <Storagelists setStorList={setStorList} storList={storList} />
      <Localstorage setLocallist={setLocallist} locallist={locallist} />
    </div>
  ) : (
    ""
  );
}

export default Lists;
