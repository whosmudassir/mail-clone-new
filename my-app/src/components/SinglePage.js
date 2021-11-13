import { observer } from "mobx-react-lite";
import React from "react";
import { useParams } from "react-router";
import { Store } from "../store/SelectedMailStore";

const SinglePage = () => {
  const { tag, id } = useParams();

  return <div>single page {Store.selectedMail?.subject}</div>;
};

export default observer(SinglePage);
