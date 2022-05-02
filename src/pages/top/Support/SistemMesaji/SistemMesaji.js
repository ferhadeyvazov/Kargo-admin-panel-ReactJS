import React from "react";
import "./sistem.scss";
const SistemMesaji = () => {
  return (
    <div className="sistem_mesaji ">
      <div className="sistem_mesaji_title ">
        <div className="blue_box"></div>
        <p className="title">Sistem Mesaji</p>
      </div>
      <div className="sistem_mesaji_id_ve_messaj">
        <div className="left">
          <div className="question">
            <button className="question_btn">Question ID</button>
          </div>

          <div className="all_ids">
            <li className="active">
              <span>122324324</span>
            </li>
            <li>334343435</li>
            <li>68768768</li>
            <li>876876868</li>
            <li>986979767</li>
            <li>870707456</li>
            <li>567788955</li>
            <li>098009897</li>
          </div>
        </div>

        <div className="right">
          <div className="messaj">
            <button className="messaj_btn">Message </button>
          </div>

          <div className="messaj_box">
            <p>Deirvlon</p>

            <div className="kutular">
              <div className="flex_start">
                <div className="left_side messaj_box_ortak">
                  <p>
                    Hello. Can I return my order in the warehouse and get my
                    payment back? Hello. Can I return my order in the warehouse
                    and get my payment back? Hello. Can I return my order in the
                    warehouse and get my payment back? Hello. Can I return my
                    order in the warehouse and get my payment back? Hello. Can I
                    return my order in the warehouse and get my payment back?
                    Hello. Can I return my order in the warehouse and get my
                    payment back?
                  </p>
                </div>
              </div>

              <div className="flex_end">
                <div className="right_side  messaj_box_ortak">
                  <p>
                    Hello. Can I return my order in the warehouse and get my
                    payment back?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemMesaji;
