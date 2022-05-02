import React from "react";
import AdditionExplaining from "../../../../components/OrdersComponents/AdditionExplaining";
import AmazonStore from "../../../../components/OrdersComponents/AmazonStore";
import Attachment from "../../../../components/OrdersComponents/Attachment";
import CommonInformation from "../../../../components/OrdersComponents/CommonInformation";
import OrderInformation from "../../../../components/OrdersComponents/OrderInformation";
import MainPackage from "../../../../components/OrdersComponents/Package/MainPackage";
import ProductContent from "../../../../components/OrdersComponents/ProductContent";
import ShipmentDefination from "../../../../components/OrdersComponents/ShipmentDefination";
import TotalPriceOrder from "../../../../components/OrdersComponents/TotalPriceOrder";

//scss i import etmeye gerek yok
const AmazonFBA = () => {
  return (
    <>
      <AmazonStore />
      <CommonInformation />
      <OrderInformation />
      <MainPackage />
      <AdditionExplaining />
      <ShipmentDefination />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default AmazonFBA;
