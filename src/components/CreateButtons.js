import React from "react";
import { Link } from "react-router-dom";
import { SVG } from "../utils/index";
import { icons } from "../svgs/index";

const CreateButtons = () => {
  return (
    <div className="btn-create">
      <button>
        <Link to="/new-board">
          <SVG
            baseProfile="tiny"
            height="34px"
            viewBox="0 0 24 24"
            width="34px"
            xmlspace="preserve"
            path={icons.plus}
            fill="#333"
          />
        </Link>
      </button>
    </div>
  );
};

export default CreateButtons;
