// SearchInput.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { InputWrapper, Input, Icon } from "./styled"; 

const InputS = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Pesquisar"
      />
      <Icon onClick={handleSearch}> <FaSearch/> </Icon>
    </InputWrapper>
  );
};

export default InputS;
