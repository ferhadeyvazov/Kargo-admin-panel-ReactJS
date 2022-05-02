import ShipmentDefination from "../../../../components/OrdersComponents/ShipmentDefination";
import ProductContent from "../../../../components/OrdersComponents/ProductContent";
import Attachment from "../../../../components/OrdersComponents/Attachment";
import TotalPriceOrder from "../../../../components/OrdersComponents/TotalPriceOrder";
import OrderInformation from "../../../../components/OrdersComponents/OrderInformation";
import TableContainer from "./TableContainer";
import "./marketOrder.scss";
const MarketPlaceOrders = () => {
  return (
    <>
      <TableContainer />
      <OrderInformation />
      <ShipmentDefination shipment={true} />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default MarketPlaceOrders;
