import React from "react";
import Button from "../Button/Button";
import SelectButton from "../Button/SelectButton";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Button variant="button-primary">Add +</Button>
      <SelectButton variant="button-select">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </SelectButton>
    </div>
  );
}
