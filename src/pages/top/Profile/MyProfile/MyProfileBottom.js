import React from "react";

const MyProfileBottom = () => {
  return (
    <>
      <div class="address-groups">
        <div class="address-group">
          <label htmlFor="">
            TC Identification number<span>*</span>{" "}
          </label>
          <input type="text" placeholder="123456" />
        </div>
        <div class="address-group">
          <label htmlFor="">
            Company Name<span>*</span>{" "}
          </label>
          <input type="text" placeholder="Deirvlon" />
        </div>
        <div class="address-group">
          <label htmlFor="">
            Tax Number<span>*</span>{" "}
          </label>
          <input type="number" placeholder="123546" />
        </div>
        <div class="address-group">
          <label htmlFor="">
            Tax Adminstration<span>*</span>{" "}
          </label>
          <input type="yext" placeholder="Adminstration" />
        </div>
      </div>
      <div className="btn">
        <button>
          <p>Update</p>
        </button>
      </div>
    </>
  );
};

export default MyProfileBottom;
