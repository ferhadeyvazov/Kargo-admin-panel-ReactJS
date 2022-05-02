import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton } from "../redux/createdemand/createDemandAction";
import { setActiveButtonTwo } from "../redux/createdemandtwo/createDemandTwoAction";
import { setActiveStock } from "../redux/stock/stockAction";
// import './CreateDemand.scss';
const CreateDemandTypes = ({ allTypes, whichType }) => {
  const { activeCreateDemandName } = useSelector(
    (state) => state.createDemandReducer
  );
  const { activeCreateDemandTwoName } = useSelector(
    (state) => state.createDemandTwoReducer
  );
  const { activeStock } = useSelector((state) => state.stockReducer);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    if (whichType === "buyformeCreateDemandOne") {
      dispatch(setActiveButton(name));
    }
    if (whichType === "buyformeCreateDemandTwo") {
      dispatch(setActiveButtonTwo(name));
    }
    if (whichType === "stock") {
      dispatch(setActiveStock(name));
    }
  };

  return (
    <div className="changes-demand">
      {allTypes.map((item) => {
        return (
          <div
            className={
              (whichType === "buyformeCreateDemandOne" &&
                `${
                  activeCreateDemandName === item.title
                    ? "active demand"
                    : "demand"
                }`) ||
              (whichType === "buyformeCreateDemandTwo" &&
                `${
                  activeCreateDemandTwoName === item.title
                    ? "active demand"
                    : "demand"
                }`) ||
              (whichType === "stock" &&
                `${activeStock === item.title ? "active demand" : "demand"}`)
            }
            onClick={() => handleClick(item.title)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default CreateDemandTypes;
