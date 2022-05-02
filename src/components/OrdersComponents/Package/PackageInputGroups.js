import React,{useState} from "react";
import RemoveBtnImage from "../../../assets/ordersIcons/removeBtn.svg";
import { useTranslation } from "react-i18next";
const PackageInputGroups = ({pack,Packed, inp_disabled}) => {

  const {t}=useTranslation(["orders","orders/manorder"])  
  function Delete() {
    
  }
  return (
    // <>
    <div className="package-inputs">
      <div className="package-input-groups">
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:count")}:<span>*</span>
          </label>{" "}
          <br />
          <input disabled={inp_disabled} onChange={(e) => Packed(e)}
            id="count" value={pack.count} type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:type")}:<span>*</span>
          </label>{" "}
          <br />
          <input disabled={inp_disabled}
            onChange={(e) => Packed(e)}
            id="type" value={pack.type}
          type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:length")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input disabled={inp_disabled} onChange={(e) => Packed(e)}
              id="length" value={pack.length} type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:width")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input disabled={inp_disabled} onChange={(e) => Packed(e)}
              id="width" value={pack.width} type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:height")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input disabled={inp_disabled} onChange={(e) => Packed(e)}
              id="height" value={pack.height} type="text" />
            <span>cm</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:weight")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input disabled={inp_disabled} onChange={(e) => Packed(e)}
              id="weight" value={pack.weight} type="text" />
            <span>kq</span>
          </div>
        </div>
      </div>
      <div className="remove-package">
        <div className="remove-btn">
          <button onClick={Delete()} className="delete-btn">
            <img src={RemoveBtnImage} alt="" />
          </button>
        </div>
      </div>
    </div>
    // </>
  );
};

export default PackageInputGroups;
