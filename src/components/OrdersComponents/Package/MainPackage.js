import React, {useState} from "react";
import QuoteSvg from "../../../assets/ordersIcons/getQuote.svg";
import editBtn from "../../../assets/inventoryImage/edit-btn.svg";

//components
import PackageSection from "./PackageSection";
import AddAnotherPackageSection from "./AddAnotherPackageSection";
import PackageBottom from "./PackageBottom";
import { useTranslation } from "react-i18next";

const Package = ({ setProduct, product, New_Product, pack, Packed, Active, inp_disabled, setInp_disabled}) => {
  const {t} = useTranslation(["orders","orders/manorder"])
const [dropitem, setDropitem] = useState(false);
const Active_button =()=>{
  setDropitem(!dropitem);
}
  return (
    <>
      <div className="package">
        <div className="package-content">
          <div className="package-top">
            <div className="package-top-content">
              <PackageSection inp_disabled={inp_disabled} Packed={Packed} pack={pack} 
              Active_button={Active_button} middle={false} />
              {dropitem?<AddAnotherPackageSection
              inp_disabled={inp_disabled}
              setProduct={setProduct}
              product={product}
              New_Product={New_Product} />:""}
              
            </div>
          </div>

          {/* <div className="package-top">
            <div className="package-top-content">
              <PackageSection middle={true} />
            </div>
          </div> */}

          <PackageBottom />
          <div className="package-btns">
            <div className="left-buttons">
              <button onClick={() => setInp_disabled(false)} 
              className="left-buttons">
                <img src={editBtn} alt="" />  
                Edit
              </button>
            </div>
              <div className="right-buttons">
              <button onClick={Active} className="get-quote">
                <img src={QuoteSvg} alt="" />
                {t("orders/manorder:getaquote")}
              </button>
              <button className="add-another-package">
                <i className="fas fa-plus"></i>
                {t("orders/manorder:addpack")}
              </button>

              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
