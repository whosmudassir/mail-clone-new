import React from "react";
import { data } from "../data";
import Slot from "./Slot";

const Body = () => {
  const spamdata = data.filter((data) => {
    if (data.tag == "spam") {
      return data;
    }
  });
  console.log(spamdata);
  return (
    <div>
      {spamdata.map((data) => (
        <Slot tag={data.tag} />
      ))}
    </div>
  );
};

export default Body;
