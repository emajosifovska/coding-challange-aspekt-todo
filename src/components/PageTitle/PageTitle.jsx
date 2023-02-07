import React from "react";
import "./PageTitle.scss";

export default function PageTitle({ children }) {
  return <h1 className="title">{children}</h1>;
}
