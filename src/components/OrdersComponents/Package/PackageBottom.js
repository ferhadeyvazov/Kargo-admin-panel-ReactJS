import React from 'react';
import TotalImage from '../../../assets/ordersIcons/totalAmount.svg';
import TotalVolume from '../../../assets/ordersIcons/totalVolume.svg';
import TotalWeight from '../../../assets/ordersIcons/totalWeight.svg';
import Kilogramme from '../../../assets/ordersIcons/kilogramme.svg';
import TotalWorth from '../../../assets/ordersIcons/worth.svg';
import Dersi from '../../../assets/ordersIcons/dersi.svg';
import { FaDollarSign } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PackageBottom = ({pack,product}) => {
  const {t} = useTranslation(["orders","orders/manorder"])
  console.log(pack.count);
  return (
    <>
      <div className="package-bottom">
        <div className="package-bottom-content">
          <div className="bottom-items">
            <div className="bottom-item">
              <div className="bottom-left">
                <div className="blue_box_for_icon">
                  <img src={TotalImage} alt="" />
                </div>
              </div>
              <div className="bottom-right">
                <p>{t("orders/manorder:tamount")}:</p>
                <p>1 {t("orders/manorder:box")}</p>
              </div>
            </div>
            <div className="bottom-item">
              <div className="bottom-left">
                <div className="blue_box_for_icon">
                  <img src={TotalVolume} alt="" />
                </div>
              </div>
              <div className="bottom-right">
                <p>{t("orders/manorder:tvolume")}:</p>
                <p>{pack.length*pack.width*pack.height} sm<sup>3</sup></p>
              </div>
            </div>
            <div className="bottom-item">
              <div className="bottom-left">
                <div className="blue_box_for_icon">
                  <img src={TotalWeight} alt="" />
                </div>
              </div>
              <div className="bottom-right">
                <p>{t("orders/manorder:tweight")}:</p>
                <p>
            {Number(pack.count * pack.weight) + Number(product.count*product.weight)} kq
                </p>
              </div>
            </div>
            {/* //! elgun kilogram silindi ***     */}
            {/* <div className="bottom-item">
              <div className="bottom-left">
                <div className="blue_box_for_icon">
                  <img src={Kilogramme} alt="" />
                </div>
              </div>
              <div className="bottom-right">
                <p>Kilogramme:</p>
                <p>1 box</p>
              </div>
            </div> */}
            <div className="bottom-item">
              <div className="bottom-left">
                <div className="blue_box_for_icon">
                  <img src={Dersi} alt="" />
                </div>
              </div>
              <div className="bottom-right">
                <p>{t("orders/manorder:prweight")}:</p>
                <p>{(pack.length * pack.width * pack.height) / 5000 >(Number(pack.count * pack.weight) + Number(product.count * product.weight))?
                    (pack.length * pack.width * pack.height) / 5000 : (Number(pack.count * pack.weight) + Number(product.count * product.weight))
                   } {t("orders/manorder:box")}
                </p>
              </div>
            </div>
            <div className="bottom-item">
              <div className="bottom-left">
                <div className="blue_box_for_icon">
                  <img src={TotalWorth} alt="" />
                </div>
              </div>
              <div className="bottom-right">
                <p>{t("orders/manorder:tworth")}:</p>
                <p>{product.unitprice * product.count}<FaDollarSign /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageBottom;
