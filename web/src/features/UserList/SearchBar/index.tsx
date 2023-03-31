import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { TextField } from "@mui/material";

type SearchBarProps = {
  handleChangeValue: (value: string) => void;
};
const SearchBar: FunctionComponent<SearchBarProps> = ({
  handleChangeValue,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
    handleChangeValue(event.target.value);
  };

  return (
    <TextField value={value} placeholder="Search..." onChange={handleChange} />
  );
};

export default SearchBar;
