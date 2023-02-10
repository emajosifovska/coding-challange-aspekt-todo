import React from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import SelectButton from "../Button/SelectButton";
import "./Header.scss";
import { STATUS_FILTER } from "../../redux/reducers/statusReducer";
import { setStatus } from "../../redux/actions";

export default function Header({ setOpenModal }) {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Button variant="button-primary" onClick={() => setOpenModal(true)}>
        Add +
      </Button>
      <SelectButton variant="button-select">
        {Object.keys(STATUS_FILTER).map((filterkey) => {
          const currentFilter = STATUS_FILTER[filterkey];
          return (
            <option
              key={`status-filter-${currentFilter}`}
              onClick={() => dispatch(setStatus(currentFilter))}
            >
              {currentFilter}
            </option>
          );
        })}
      </SelectButton>
    </div>
  );
}
