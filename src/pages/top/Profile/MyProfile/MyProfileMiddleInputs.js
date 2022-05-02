import React from "react";
import adressImg from "../../../../assets/ProfileIconImages/myAdress.svg";
import phoneSvg from "../../../../assets/ProfileIconImages/phone.svg";
const MyProfileMiddleInputs = () => {
  return (
    <div className="middle-inputs">
      <div class="middle-input-box">
        <div>
          <label htmlFor="name" class="label-grid middle-input-box-label">
            <span>Name Surname</span>
            <input
              type="text"
              class="middle-input-box-input"
              id="name"
              name="name"
            />
          </label>
        </div>
      </div>
      {/* //! input with input */}
      <div class="middle-input-box">
        <div className="inner_div_box">
          <label htmlFor="phone" class="label-grid middle-input-box-label">
            <span>
              <img src={phoneSvg} alt="" />
              <span>Phone:</span>
            </span>
            <span className="inner_span">
              <input
                type="number"
                className="inner_span_content"
                placeholder="+994"
                readonly="readonly"
              />
              <input
                type="number"
                class="middle-input-box-input"
                id="phone"
                name="phone"
              />
            </span>
          </label>
        </div>
      </div>
      <div class="middle-input-box">
        <div>
          <label htmlFor="adress" class="label-grid middle-input-box-label">
            <span>
              <img src={adressImg} alt="" />
              <span>Address:</span>
            </span>
            <input
              type="text"
              class="middle-input-box-input"
              id="adress"
              name="adress"
            />
          </label>
        </div>
      </div>{" "}
      <div class="middle-input-box">
        <div>
          <label htmlFor="city" class=" label-grid middle-input-box-label">
            <span>
              <img src={adressImg} alt="" />
              <span>City:</span>
            </span>
            <input
              type="text"
              class="middle-input-box-input"
              id="city"
              name="city"
            />
          </label>
        </div>
      </div>{" "}
      <div class="middle-input-box">
        <div>
          <label htmlFor="country" class="label-grid middle-input-box-label">
            <span>
              <img src={adressImg} alt="" />
              <span>Country:</span>
            </span>
            <input
              type="text"
              class="middle-input-box-input"
              id="country"
              name="country"
            />
          </label>
        </div>
      </div>
      <div class="middle-input-box">
        <div>
          <label htmlFor="postcode" class=" label-grid middle-input-box-label">
            <span>
              <span>Post Code:</span>
            </span>
            <input
              type="number"
              class="middle-input-box-input"
              id="postcode"
              name="postcode"
            />
          </label>
        </div>
      </div>
      <div className="middle-input-box middle-input-box-membership">
        <div>
          <label htmlFor="" class="label-grid middle-input-box-label">
            <span>
              <span>Membership:</span>
            </span>

            <div class="radio_buttons_box">
              <label htmlFor="personal">
                <input
                  class="input_radio"
                  type="radio"
                  id="personal"
                  name="a"
                />
                <span>Personal</span>
              </label>
              <label htmlFor="Institutional">
                <input
                  type="radio"
                  name="a"
                  id="Institutional"
                  class="input_radio"
                />
                <span>Institutional</span>
              </label>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default MyProfileMiddleInputs;
