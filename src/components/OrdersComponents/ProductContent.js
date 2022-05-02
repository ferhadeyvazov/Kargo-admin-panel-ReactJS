import React from 'react';
import ContentImage from '../../assets/ordersIcons/prContent.svg';
import { useTranslation } from 'react-i18next';
const ProductContent = () => {
  const {t}=useTranslation(["orders","orders/manorder"])
  return (
    <>
      <div className="product-content-section">
        <div className="product-section-top">
          <img src={ContentImage} alt="" />
          <h4>{t("orders/manorder:productcont")}</h4>
        </div>
        <div className="product-content-body">
          <div className="product-content-items">
            <div className="product-top">
              <div className="product-top-items">
                <div className="product-top-item">
                  <div className="product-question">
                    <p>{t("orders/manorder:battery")}?</p>
                  </div>
                  <div className="question-answer">
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="a" />
                      <label htmlFor="a">{t("orders/manorder:yes")}</label>
                    </div>
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="b" />
                      <label htmlFor="b">{t("orders/manorder:no")}</label>
                    </div>
                  </div>
                </div>
                <div className="product-top-item">
                  <div className="product-question">
                    <p>{t("orders/manorder:battery")}?</p>
                  </div>
                  <div className="question-answer">
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="c" />
                      <label htmlFor="c">{t("orders/manorder:yes")}</label>
                    </div>
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="d" />
                      <label htmlFor="d">{t("orders/manorder:no")}</label>
                    </div>
                  </div>
                </div>
                <div className="product-top-item">
                  <div className="product-question">
                    <p>{t("orders/manorder:battery")}?</p>
                  </div>
                  <div className="question-answer">
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="" />
                      <label htmlFor="">{t("orders/manorder:yes")}</label>
                    </div>
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="" />
                      <label htmlFor="">{t("orders/manorder:no")}</label>
                    </div>
                  </div>
                </div>
                <div className="product-top-item">
                  <div className="product-question last-item">
                    <p>{t("orders/manorder:battery")}?</p>
                  </div>
                  <div className="question-answer">
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="" />
                      <label htmlFor="">{t("orders/manorder:yes")}</label>
                    </div>
                    <div className="answer-yes">
                      <input type="radio" name="question-answer" id="" />
                      <label htmlFor="">{t("orders/manorder:no")}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-bottom">
              <div className="product-bottom-content">
                <p>
                  *{t("orders/manorder:row1")} <span>MSDS</span> {t("orders/manorder:row1_2")}.              
                </p>
                <p>
                  *{t("orders/manorder:row2")} <span>MSDS</span> {t("orders/manorder:row1_2")}.
                </p>
                <p>
                  *{t("orders/manorder:row3")} <span>FDA</span> {t("orders/manorder:row3_1")}.
                </p>
                <p>
                  *{t("orders/manorder:row4")} <span>MSDS</span> {t("orders/manorder:row4_1")}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContent;
