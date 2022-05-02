import React from "react";
import AttachImage from "../../assets/ordersIcons/attach.svg";
import "../../orders.scss";
import { useTranslation } from "react-i18next";
const Attachment = () => {
  function Submit(){
    let userinfo = localStorage.getItem('adress_information');
    let send = JSON.parse(userinfo);    
  }


  const {t} = useTranslation(["orders","orders/manorder"])
  return (
    <>
      <div className="attach-document">
        <div className="attach-document-head">
          <img src={AttachImage} alt="" />
          <h4>{t("orders/manorder:attachdoc")}</h4>
        </div>
        <div className="attach-document-body">
          <div className="attach-document-content">
            <div className="attach-document-top">
              <div className="attach-top-head">
                <h4>{t("orders/manorder:selectdoc")}</h4>
              </div>
              <div className="attach-middle">
                <div className="select-items">
                  <select name="" id="">
                    <option value="">dskvbddf</option>
                    <option value="">dskvbddf</option>
                    <option value="">dskvbddf</option>
                  </select>
                </div>
                <div className="upload_file">
                  <div className="upload_file_up">
                    <p>(PDF,Maks. 5.9 MB) </p>
                  </div>
                  <div className="upload_file_down">
                    <div className="file-input">
                      <input
                        type="file"
                        name="file-input"
                        id="file-input"
                        className="file-input__input"
                      />
                      <label className="file-input__label" htmlFor="file-input">
                        <span>{t("orders/manorder:selectfile")}</span>
                      </label>
                    </div>

                    <p>{t("orders/manorder:linkname")}</p>
                  </div>
                </div>
                <div className="select-link">
                  {/* <a href="">link.pdfnnnvfkv</a> */}
                  <button>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="attach-document-bottom">
              <div className="document-bottom-head">
                <div className="file-name-items">
                  <h4>{t("orders/manorder:filename")}</h4>
                  <p>File related to plants</p>
                  <p>File related to plants</p>
                  <p>File related to plants</p>
                  <p>File related to plants</p>
                </div>
                <div className="file-name-items">
                  <h4>{t("orders/manorder:file")}</h4>
                  <a href="">link.pdfnnnvfkv</a> <br />
                  <a href="">link.pdfnnnvfkv</a> <br />
                  <a href="">link.pdfnnnvfkv</a> <br />
                  <a href="">link.pdfnnnvfkv</a> <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirm-order">
          <button onClick={Submit()} className="confirm-btn">
            <i className="far fa-check"></i>
            {t("orders/manorder:confirmorder")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Attachment;
