import React, {useState,useEffect} from "react";
import axios from 'axios';
import Attachment from "../../../../components/OrdersComponents/Attachment";
import CommonInformation from "../../../../components/OrdersComponents/CommonInformation";
import CustomerSection from "../../../../components/OrdersComponents/CustomerSection";
import OrderInformation from "../../../../components/OrdersComponents/OrderInformation";
import MainPackage from "../../../../components/OrdersComponents/Package/MainPackage";
import ProductContent from "../../../../components/OrdersComponents/ProductContent";
import ShipmentDefination from "../../../../components/OrdersComponents/ShipmentDefination";
import TotalPriceOrder from "../../../../components/OrdersComponents/TotalPriceOrder";
import "../../../../orders.scss";
import Customerinfo from './Jsons/Customerinfo.json';
import Commoninfo from './Jsons/Commoninfo.json';
import Getaquote from '../../Orders/ManuelOrder/Jsons/Getaquote.json'
import Productinfo from '../../Orders/ManuelOrder/Jsons/Getaproduct.json'
const ManuelOrder = () => {
  const [data, setData] = useState(Customerinfo);
  const [com, setCom] = useState(Commoninfo);
  const [pack, setPack] = useState(Getaquote);
  const [product, setProduct] = useState(Productinfo);
  
  function Doluinput(){
    let items = JSON.stringify(data);
  localStorage.setItem('adress_information', items);
  let userinfo = localStorage.getItem('adress_information');
  let send = JSON.parse(userinfo);
  
}
function Dolucommon(){
  let items = JSON.stringify(com);
  localStorage.setItem('common_information', items);
  let userinfo = localStorage.getItem('common_information');
  let send = JSON.parse(userinfo);
}
function GetQuote(){
  let items = JSON.stringify(pack);
  localStorage.setItem('Package', items);
  let userinfo = localStorage.getItem('Package');
  let send = JSON.parse(userinfo);
}
function Getproduct() {
let items = JSON.stringify(product);
localStorage.setItem('Product', items);
let userinfo = localStorage.getItem('Product');
let send = JSON.parse(userinfo);
}

let emtyinputs = Object.values(data).slice(0).every(a => (a && a !== "0"));
let emtycommon = Object.values(com).slice(0).every(a => (a && a !== "0"));
let emtypack = Object.values(pack).slice(0).every(a => (a && a !== "0"));
let emtyproduct = Object.values(product).slice(0).every(a => (a && a !== "0"));
console.log(emtyinputs);
console.log(emtycommon);
console.log(product);
if(emtyinputs){
  Doluinput();
}

if (emtycommon){
  Dolucommon();
}
if (emtypack) {
  GetQuote();
}
if (emtyproduct) {
  Getproduct();
}

function handle(e) {
  e.preventDefault()
  const newdata = { ...data }
  newdata[e.target.id] = e.target.value;
  setData(newdata);
  // console.log(JSON.parse(userinfo));
};

function Common(e){
  const newdata={...com}
  newdata[e.target.id] = e.target.value;
  setCom(newdata);
}

  function Packed(e) {
    const newdata = { ...pack}
    newdata[e.target.id] = e.target.value;
    setPack(newdata);
  }
  function New_Product(e) {
    const newdata = { ...product}
    newdata[e.target.id] = e.target.value;
    setProduct(newdata);

  }
  const[respons, setRespons] = useState([])
  useEffect(()=> {

        if((emtypack&&emtyproduct)&&[]){
          
          let packdaties = localStorage.getItem('Product','Package');
          let sendatas = JSON.parse(packdaties);
          axios.post('http://kargo.kendigetir.az/public/api/address/create', sendatas)
          .then(res => setRespons(res.data))
          .catch((error)=>{
            if(error.response){
              console.log(error.response.data);
            }
          })

        }




    },[emtypack,emtyproduct]
  )
  return (
    <>
      <CustomerSection data={data} handle={handle}  />
      {emtyinputs ? <CommonInformation com={com} Common={Common} />:""}
      {emtyinputs&&emtycommon ? <OrderInformation />:""}
      {/* {emtyinputs && emtycommon ? <MainPackage /> : ""} */}
      <MainPackage product={product} 
      setProduct={setProduct} New_Product={New_Product}
      pack={pack} Packed={Packed}  />
      <ShipmentDefination shipment={true} />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default ManuelOrder;
