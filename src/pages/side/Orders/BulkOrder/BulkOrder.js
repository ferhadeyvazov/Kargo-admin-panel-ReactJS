import React from "react";
import "./bulk.scss";
import cloudUpload from "../../../../assets/ordersIcons/uploadFileCloud.svg";
import { useTranslation } from "react-i18next";
const BulkOrder = () => {
  const{t} = useTranslation(["orders","orders/bulkorder","orders/manorder"])
  return (
    <div className="bulk_container">
      <div className="inner_content_80 bulk_content">
        <div className="bulk_content_info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            optio dolorum, ad odio atque nesciunt dicta. Id magnam nulla, in
            corrupti, ex minima placeat ipsum corporis nihil voluptatem
            possimus. Quasi amet dolorem unde odio asperiores suscipit aperiam
            eius assumenda expedita laborum neque natus hic officiis ipsum
            consequuntur iure modi, laudantium impedit atque. Deserunt
            distinctio similique nam eaque rerum itaque excepturi, asperiores
            quibusdam! Qui cupiditate voluptatibus ipsum magnam asperiores atque
            earum. Eaque reprehenderit aliquam suscipit deleniti et sequi est
            recusandae dolore? Repellat, quaerat. Officia cumque iure facilis
            repellendus repudiandae tempora illo ullam sint dolores tempore
            ipsam, magnam veritatis quis maiores fugiat?
          </p>

          <button>{t("orders/bulkorder:dowsimpfile")} </button>
        </div>
      </div>
      <div className="inner_content_80 bulk_content">
        <p className="bulk_content_title">{t("orders/manorder:selectfile")}</p>
        <div className="bulk_content_info upload_file">
          <div className="upload_file_content">
            <img src={cloudUpload} alt="" />
            <p>{t("orders/bulkorder:dropfile")}</p>
            <p>{t("orders/bulkorder:or")}</p>

            <p className="upload_file_content_blue">
              {t("orders/bulkorder:fromcomputer")}
            </p>
            <p>({t("orders/bulkorder:maxsize")} 2MB)</p>
          </div>
        </div>
      </div>
      <div className="confirm-order-btn">
        <button className="confirm-btn">
          <i className="far fa-check"></i>
          {t("orders/manorder:confirmorder")}
        </button>
      </div>
    </div>
  );
};

export default BulkOrder;
