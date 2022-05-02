import React from "react";
import CommonInformation from "../../../../components/OrdersComponents/CommonInformation";
import MainPackage from "../../../../components/OrdersComponents/Package/MainPackage";
import LoungStore from "../../../../components/OrdersComponents/LoungStore";
import OrderInformation from "../../../../components/OrdersComponents/OrderInformation";
import ShipmentDefination from "../../../../components/OrdersComponents/ShipmentDefination";
import ProductContent from "../../../../components/OrdersComponents/ProductContent";
import Attachment from "../../../../components/OrdersComponents/Attachment";
import TotalPriceOrder from "../../../../components/OrdersComponents/TotalPriceOrder";
const LoungShip = () => {
  return (
    <>
      <LoungStore />
      <CommonInformation />
      <OrderInformation />
      <MainPackage />
      <ShipmentDefination />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default LoungShip;
