import React, { useState } from "react";
import Button from "../Button/Button";
import SelectButton from "../Button/SelectButton";
import TodoModal from "../TodoModal/TodoModal";
import "./Header.scss";

export default function Header() {
  const [openModal, setOpenModal] = useState(true);

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
      <TodoModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
