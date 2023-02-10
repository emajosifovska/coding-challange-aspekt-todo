import React from "react";
import Button from "../Button/Button";
import SelectButton from "../Button/SelectButton";
import "./Header.scss";

export default function Header({ setOpenModal }) {
  return (
    <div className="header">
      <Button variant="button-primary" onClick={() => setOpenModal(true)}>
        Add +
      </Button>
      <SelectButton variant="button-select">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </SelectButton>
    </div>
  );
}
