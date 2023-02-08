import React from "react";
import "./Button.scss";

export default function Button({ children, type, variant, onClick }) {
  return (
    <button
      className={`button ${variant}`}
      type={type === "submit" ? "submit" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
