import Frame from "../assets/mainPageSvgs/Frame.png";
import Notification from "../assets/mainPageSvgs/Notification.svg";
import Amount from "../assets/mainPageSvgs/Amount.svg";
import Desi from "../assets/mainPageSvgs/Desi.svg";
import Kilo from "../assets/mainPageSvgs/Kilo.svg";
import Volume from "../assets/mainPageSvgs/Volume.svg";
import Weight from "../assets/mainPageSvgs/Weight.svg";
import Worth from "../assets/mainPageSvgs/Worth.svg";
import BellBlue from "../assets/mainPageSvgs/BellBlue.svg";
import Grafik from "../assets/mainPageSvgs/Grafik.svg";
import detal from "../assets/sideBarIcons/detal.svg";

export const mainPageConstantVariables = {
  mainPageCarts: [
    {
      id: 1,
      svg: detal,
      number: 0,
      text: "shipmentinquiry",
      color_className: "red",
      num_color_className: "red",
      hasInput: true,
    },

    {
      id: 2,
      svg: detal,
      number: 0,
      text: "waiting",
      color_className: "orange",
      num_color_className: "orange-number",
      hasInput: false,
    },
    {
      id: 3,
      svg: detal,
      number: 0,
      text: "thoseatthefacility",
      color_className: "blue",
      num_color_className: "blue-number",
      hasInput: false,
    },
    {
      id: 4,
      svg: detal,
      number: 0,
      text: "sent",
      color_className: "qolub",
      num_color_className: "qolub-number",
      hasInput: false,
    },

    {
      id: 5,
      svg: detal,
      number: 0,
      text: "reached",
      color_className: "pink",
      num_color_className: "pink-number",
      hasInput: false,
    },
    {
      id: 6,
      svg: detal,
      number: 0,
      text: "unpaid",
      color_className: "light_blue",
      num_color_className: "light_blue_number",
      hasInput: false,
    },
  ],
};
