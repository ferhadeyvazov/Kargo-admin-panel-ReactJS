import BakiyeSsitemi from "../assets/balance-system-icons/bakiyeSistemi.svg";
import BakiyeYukle from "../assets/balance-system-icons/bakiyeYukle.svg";
import ParaIade from "../assets/balance-system-icons/paraIade.svg";

//courier
import Courier from "../assets/CourierSystemIcons/cRequest.svg";
import Demand from "../assets/CourierSystemIcons/demandRequest.svg";
import History from "../assets/CourierSystemIcons/history.svg";

//for settings

import sDemand from "../assets/supportImages/suportDemand.svg";
import cSupport from "../assets/supportImages/createSupportDemand.svg";
import sMessage from "../assets/supportImages/systemMessage.svg";
export const SsytemTypes = {
  balance: [
    {
      id: 1,
      typeName: "Bakiye Yükle",
      typeSvg: BakiyeSsitemi,
      className: "blue",
      link: "bakiye-yükle",
    },
    {
      id: 2,
      typeName: "Yükleme Geçmişi",
      typeSvg: BakiyeYukle,
      className: "red",
      link: "yükleme-geçmişi",
    },
    {
      id: 3,
      typeName: "Para İade işlemleri",
      typeSvg: ParaIade,
      className: "orange",
      link: "para-İade-işlemleri",
    },
  ],
  courier: [
    {
      id: 1,
      typeName: "Kurye Talep",
      typeSvg: Courier,
      className: "blue",
    },
    {
      id: 2,
      typeName: "Talep Oluşdur",
      typeSvg: Demand,
      className: "red",
    },
    {
      id: 3,
      typeName: "Kurye Geçmişi",
      typeSvg: History,
      className: "orange",
    },
  ],
  settings: [
    {
      id: 1,
      typeName: "Destek Talebi",
      typeSvg: sDemand,
      className: "blue",
    },
    {
      id: 2,
      typeName: "Destek Talebi Oluştur",
      typeSvg: cSupport,
      className: "red",
    },
    {
      id: 3,
      typeName: "Sistem Mesajı",
      typeSvg: sMessage,
      className: "orange",
    },
  ],
  buyforme: [
    {
      id: 1,
      typeName: "My Request",
      typeSvg: sDemand,
      className: "blue",
    },
    {
      id: 2,
      typeName: "Create Demand",
      typeSvg: cSupport,
      className: "red",
    },
    {
      id: 3,
      typeName: "Create Batch",
      typeSvg: sMessage,
      className: "orange",
    },
  ],
};

/*
export const balanceSsytemTypes = [
  {
    id: 1,
    typeName: "Bakiye Yükle",
    typeSvg: BakiyeSsitemi,
    className: "blue",
    link: "bakiye-yükle",
  },
  {
    id: 2,
    typeName: "Yükleme Geçmişi",
    typeSvg: BakiyeYukle,
    className: "red",
    link: "yükleme-geçmişi",
  },
  {
    id: 3,
    typeName: "Para İade işlemleri",
    typeSvg: ParaIade,
    className: "orange",
    link: "para-İade-işlemleri",
  },
]


*/
