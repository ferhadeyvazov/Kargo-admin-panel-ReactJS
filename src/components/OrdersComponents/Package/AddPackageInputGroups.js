import React, {useState} from "react";
import RemoveBtnImage from "../../../assets/ordersIcons/removeBtn.svg";
import { useTranslation } from "react-i18next";
import { FaDollarSign } from 'react-icons/fa';
const AddPackageInputGroups = ({setProduct, product, Production,inp_disabled}) => {
  const {t}=useTranslation(["orders","orders/manorder"])

  return (
    <div className="package-inputs">
      <div className="package-input-groups">
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:skucode")}:<span>*</span>
          </label>{" "}
          <br />
          <input disabled={inp_disabled} onChange={(e) => Production(e)}
          id="skucode" value={product.skucode}
          type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:product")}:<span>*</span>
          </label>{" "}
          <br />
          <input disabled={inp_disabled} onChange={(e) => Production(e)}
          id="product" value={product.product} type="text" />
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:count")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
            <input 
            disabled={inp_disabled} onChange={(e) => Production(e)}
          id="count" value={product.count} type="text" />
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:weight")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
          <input disabled={inp_disabled} onChange={(e) => Production(e)}
          id="weight" value={product.weight} type="text" />
          <span>kq</span>
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:unitprice")}:<span>*</span>
          </label>{" "}
          <br />
          <div className="separate-input">
          <input disabled={inp_disabled} onChange={(e) => Production(e)}
          id="unitprice" value={product.unitprice} type="text" />
          <span>
<FaDollarSign/>
          </span>          
          </div>
        </div>
        <div className="package-input">
          <label htmlFor="">
            {t("orders/manorder:gtipcode")}:<span>*</span>
          </label>{" "}
          <br />
          <input disabled={inp_disabled} onChange={(e) => Production(e)}
          id="gtipcode" value={product.gtipcode} type="text" />
        </div>
      </div>
      <div className="remove-package">
        <div className="remove-btn">
          <button className="delete-btn">
            <img src={RemoveBtnImage} alt="removeImage" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPackageInputGroups;
