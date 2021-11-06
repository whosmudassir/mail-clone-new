import React from "react";

const Slot = (props) => {
  //   console.log("props>>", props);
  return <div style={{ background: "grey", padding: "5px" }}>{props.tag}</div>;
};

export default Slot;
