import React from "react";
import { useTranslation } from "react-i18next";
const AdditionExplaining = () => {
  const{t} = useTranslation(["orders","orders/amazon","orders/manorder"])
  return (
    <div class="package-addition">
      <div class="package-addition-items">
        <div class="package-addition-content">
          <p>
            *{t("orders/amazon:row1")}. <br />
            *{t("orders/amazon:row2")}. <br />
            *{t("orders/amazon:row3")}. <br />
            *{t("orders/amazon:row4")}. <br />
            *{t("orders/amazon:row5")}. <br />
            *{t("orders/amazon:row6")}. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionExplaining;
