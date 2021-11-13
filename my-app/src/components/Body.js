import React from "react";
import { data } from "../data";
import Slot from "./Slot";

const Body = ({ name }) => {
  const selectedTagData = data.filter((data) => {
    if (data.tag == name) {
      return data;
    }
  });

  return (
    <div>
      {selectedTagData.map((data) => (
        <Slot {...data} />
      ))}
      <p></p>
    </div>
  );
};

export default Body;
