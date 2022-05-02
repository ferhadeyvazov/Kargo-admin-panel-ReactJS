import React, {useState} from "react";
import Lists from '../../../pages/side/Orders/ManuelOrder/Popup/orderinfo/Lists.js'
import PackageImage from "../../../assets/ordersIcons/package.svg";
import AddPackageInputGroups from "./AddPackageInputGroups";
import { useTranslation } from "react-i18next";

const AddAnotherPackageSection = ({setProduct, product, New_Product,inp_disabled}) => {
  const[addList,setAddList]=useState(false);
  const {t}=useTranslation(["orders","orders/manorder"])
  return (
    <>
      <div className="package-section product-section">
        <div className="package-head">
          <div className="package-head-top">
            <img src={PackageImage} alt="Products" />
            <h4>{t("orders/manorder:products")}</h4>
          </div>
          <div className="add-package">
            <button onClick={()=>setAddList(!addList)}>
              <i className="fas fa-plus"></i>
            </button>
            <h4>{t("orders/manorder:addpack")}</h4>
          </div>

        </div>
          <Lists setList={addList}/>
        <AddPackageInputGroups 
        inp_disabled={inp_disabled} setProduct={setProduct}
        product={product} Production={New_Product} />
      </div>
    </>
  );
};

export default AddAnotherPackageSection;
