import myProfileSvg from "../assets/ProfileIconImages/myprofile.svg";
import myAdress from "../assets/ProfileIconImages/myAdress.svg";
import customer from "../assets/ProfileIconImages/customer.svg";
import changePas from "../assets/ProfileIconImages/changePas.svg";
import amountDebt from "../assets/ProfileIconImages/amountDebt.svg";

export const profileItems = {
  mainPageCarts: [
    {
      id: 1,
      svg: myProfileSvg,
      name: "My Profile",
      ad: "Benim Profilim",
    },
    {
      id: 2,
      svg: myAdress,
      name: "My Adress",
      ad: "Benim Adresim",
    },
    {
      id: 3,
      svg: customer,
      name: "Customer Adress",
      ad: "Müşteri Adresim",
    },
    {
      id: 4,
      svg: changePas,
      name: "Change Password",
      ad: "Şifreyi Değiştir",
    },
    {
      id: 4,
      svg: amountDebt,
      name: "Amount of Debt",
      ad: "Borc Miktarı",
    },
  ],
};
