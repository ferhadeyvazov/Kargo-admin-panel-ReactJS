import React from "react";
import "./taleb.scss";
const DestekTalebiOLusdur = () => {
  return (
    <div className="destek_talebi_olusdur talep_olusdur">
      <div className="destek_talebi_title title_blue">
        <div className="blue_box"></div>
        <p className="title">Destek Talebi Oluşdur</p>
      </div>

      {/* form */}
      <div className="talep_olusdur_form">
        <div className="form_flex">
          <div className="form_flex_column">
            <span>
              Caller Name <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="text"
              placeholder="Deirvlon."
              name="name"
            />
          </div>
          <div className="form_flex_column">
            <span>
              ID <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="number"
              placeholder="4683"
              name="ID"
            />
          </div>
          <div className="form_flex_column">
            <span>
              ID <span className="red_span">*</span>
            </span>
            <input
              className="form_inp"
              type="number"
              placeholder="4683"
              name="ID"
            />
          </div>
        </div>
      </div>

      {/* //notes */}

      <div className="notes">
        <div className="form_flex_column">
          <span className="form_flex_column_title">Length:</span>
          <div className="like_inp">
            <input type="number" />
            <span>cm</span>
          </div>
        </div>
        <div className="form_flex_column">
          <span className="form_flex_column_title">Width:</span>
          <div className="like_inp">
            <input type="number" />
            <span>cm</span>
          </div>
        </div>
        <div className="form_flex_column">
          <span className="form_flex_column_title">Height:</span>
          <div className="like_inp">
            <input type="number" />
            <span>cm</span>
          </div>
        </div>
        <div className="form_flex_column">
          <span className="form_flex_column_title">Weight:</span>
          <div className="like_inp">
            <input type="number" />
            <span>cm</span>
          </div>
        </div>
        <div className="form_flex_column">
          <span className="form_flex_column_title">Note:</span>
          <div className="like_inp">
            <input type="text" className="text_note" />
          </div>
        </div>
      </div>

      {/* //upload file   */}

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
              <span>Select file</span>
            </label>
          </div>

          <p>Link Name </p>
        </div>
      </div>

      {/* text */}
      <div className="talep_olusdur_comments">
        <p>Text</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default DestekTalebiOLusdur;
/*
   <div class="notes">
        <div class="form_flex_column">
          <span className="form_flex_column_title">Length:</span>
          <div class="like_inp">
            <input type="number" />
            <span>sm</span>
          </div>
        </div>
      </div>


       .notes {
        display: flex;
        justify-content: space-between;
        padding-right: 127px;

        .form_flex_column {
            &_title {
                color: #405982;
                font-size: 16px;
                padding-bottom: 8px;
            }

            .like_inp {
                max-width: 128px;
                width: 100%;
                padding: 8px 11px;
                border: 1px solid rgba(0, 0, 0, 0.35);

                span {

                    width: 35px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
*/
