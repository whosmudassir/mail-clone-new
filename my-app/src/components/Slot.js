import React from "react";
import { Link } from "react-router-dom";
import { Store } from "../store/SelectedMailStore";
import { observer } from "mobx-react-lite";

const Slot = (props) => {
  console.log("props>>", props);

  return (
    <div
      style={{ background: "grey", padding: "5px" }}
      onClick={() => {
        console.log("sss");
        Store.setSelectedMail(props);
      }}
    >
      <Link to={`/${props.tag}/${props.id}`}>{props.tag}</Link>
    </div>
  );
};

export default observer(Slot);
