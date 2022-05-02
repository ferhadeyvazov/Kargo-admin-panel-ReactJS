import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bakiyeYukleTypes } from "../../../../constants/bakiyeYukleIconAndTypes";
import { setButtonToPlusOrMinus } from "../../../../redux/bakiyeYukle/bakiyeYukleAction";

const BakiyeYukleTypes = () => {
  const state = useSelector((state) => state.bakiyeYukle);
  const dispatch = useDispatch();
  return (
    <div className="bakiye_yukle_accordion_types">
      {bakiyeYukleTypes.map((item) => {
        return (
          <div className="each_type" key={item.id}>
            <button
              className="each_type_icon btn"
              onClick={() => dispatch(setButtonToPlusOrMinus(item.title))}
            >
              {state.activeBakiyeYukleName === item.title ? (
                <i className="fal fa-minus"></i>
              ) : (
                <i className="fal fa-plus"></i>
              )}
            </button>
            <div className="each_type_title">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BakiyeYukleTypes;

/*
    <div className="bakiye_yukle_accordion_types">
      <div className="each_type">
        <button
          className="each_type_icon btn"
          onClick={() =>
            dispatch(setButtonToPlusOrMinus("Bank Hesap Bilgileri"))
          }
        >
          {state.bankHesapBilgiler ? (
            <i class="fal fa-minus"></i>
          ) : (
            <i class="fal fa-plus"></i>
          )}
        </button>
        <div className="each_type_title">Bank Hesap Bilgileri</div>
      </div>
      <div className="each_type">
        <button
          className="each_type_icon"
          onClick={() =>
            dispatch(setButtonToPlusOrMinus("Bank Hesabina Ödeme"))
          }
        >
          {state.bankHesabinaOdeme ? (
            <i class="fal fa-minus"></i>
          ) : (
            <i class="fal fa-plus"></i>
          )}
        </button>
        <div className="each_type_title">Bank Hesabina Odeme</div>
      </div>
      <div className="each_type">
        <button
          className="each_type_icon"
          onClick={() => dispatch(setButtonToPlusOrMinus("Online Ödeme"))}
        >
          {state.onlineOdeme ? (
            <i class="fal fa-minus"></i>
          ) : (
            <i class="fal fa-plus"></i>
          )}
        </button>
        <div className="each_type_title">Online Odeme</div>
      </div>
    </div>




*/
