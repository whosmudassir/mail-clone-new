import React from "react";
import { Link } from "react-router-dom";
import Body from "./Body";

const Sidebar = () => {
  return (
    <nav>
      <Link to="/">Inbox</Link>
      <Link to="draft">Draft</Link>
      <Link to="spam">Spam</Link>
      <Link to="trash">Trash</Link>
      <Link to="sent">Sent</Link>
    </nav>
  );
};

export default Sidebar;
