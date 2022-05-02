import React from "react";
import AirCargo from "../../../../assets/GetSpecialOfferIcons/AirCargo.svg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Air = () => {
  return (
    <form>
      <div class="address-groups">
        <div class="address-group">
          <label for="">Origin</label> <br />
          <select name="" id="">
            <option value="">Cyti</option>
            <option value="">UK</option>
            <option value="">Norway</option>
          </select>
        </div>
        <div class="address-group">
          <label for="">Destination</label> <br />
          <select name="" id="">
            <option value="">Rayon</option>
            <option value="">UK</option>
            <option value="">Norway</option>
          </select>
        </div>
      </div>
      <p> Shipping type</p>
      <div className="orders-under">
        <label htmlFor="aircargo" className="air-cargo">
          <input
            type="radio"
            className="answer"
            id="aircargo"
            name="aircargo"
            checked
          />
          <img className="orders-svg" src={AirCargo} alt="" />
          <span>Air Cargo</span>
        </label>
      </div>

      <p> Box/Pallet</p>
      <div className="local-global">
        <div class="address-groups">
          <div class=" get-offer-group">
            <label>Length</label>
            <div className="box-input">
              <input type="text" placeholder="Pick type" />
              <span>cm</span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>Width</label>
            <div className="box-input">
              <input type="text" placeholder="0" />
              <span>cm</span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>Height</label>
            <div className="box-input">
              <input type="text" placeholder="Pick type" />
              <span>cm</span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>Weight</label>
            <div className="box-input">
              <input type="text" placeholder="0" />
              <span>kq</span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>Quantity</label>
            <div className="box-input amount-box">
              <button>
                <AiOutlineMinus />
              </button>
              <div className="amount">1</div>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div class=" get-offer-group">
            <div className="add-button">
              <button>
                <i class="far fa-plus"></i>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="local-global">
        <div class="address-groups">
          <div class=" get-offer-group">
            <label>Total Volume</label>
            <div className="box-input">
              <input type="text" placeholder="0.0" />
              <span>
                m<sup>3</sup>
              </span>
            </div>
          </div>
          <div class=" get-offer-group">
            <label>Total Weight</label>

            <div className="box-input">
              <input type="text" placeholder="0" />
              <span>kq</span>
            </div>
          </div>
        </div>
      </div>
      <div class="address-groups">
        <div class="address-group">
          <label for="cargo">Cargo</label> <br />
          <input
            id="cargo"
            type="text"
            placeholder="Description + (HS/HTS Code of the product if available)"
          />
        </div>
        <div class="address-group">
          <label for="date">Goods ready date</label> <br />
          <input id="date" type="date" />
        </div>
        <div class="address-group">
          <label for="cargo">Cargo</label> <br />
          <input
            id="cargo"
            type="text"
            placeholder="Description + (HS/HTS Code of the product if available)"
          />
        </div>
        <div class="address-group">
          <label for="address">Delivery address</label> <br />
          <input
            id="address"
            type="text"
            placeholder="Postal code for delivery"
          />
        </div>
        <div class="address-group">
          <label for="information">Additional information</label> <br />
          <input
            id="information"
            type="text"
            placeholder="Additional details or requests"
          />
        </div>
      </div>
      <p> MSDS / Other Document / Photo</p>
      <div className="upload_file">
        <div className="upload_file_up">
          <p>(PDF,Maks. 5.0 MB) </p>
        </div>
        <div className="upload_file_down">
          <div class="file-input">
            <input
              type="file"
              name="file-input"
              id="file-input"
              class="file-input__input"
            />
            <label class="file-input__label" for="file-input">
              <span>Select file</span>
            </label>
          </div>
          <p>Link Name </p>
        </div>
      </div>
    </form>
  );
};

export default Air;
