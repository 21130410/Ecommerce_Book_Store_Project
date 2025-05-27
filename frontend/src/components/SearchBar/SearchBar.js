import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";

function SearchBar({ list, onInputChange, onEnter }) {
  const [input, setInput] = useState("");

  return (
    <Autocomplete
      freeSolo
      options={list}
      onInputChange={(event, newValue) => {
        setInput(newValue);
        if (onInputChange) onInputChange(newValue);
      }}
      onChange={(event, newValue) => {
        if (newValue !== null && onEnter) {
          onEnter(newValue);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Tìm kiếm..."
          variant="outlined"
          size="small"
          sx={{
            width: 350,
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  onClick={() => {
                    if (input && onEnter) {
                      onEnter(input);
                    }
                  }}
                  style={{ cursor: "pointer" }}
                />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

SearchBar.propTypes = {
  list: PropTypes.array.isRequired,
  onInputChange: PropTypes.func,
  onEnter: PropTypes.func,
};

export default SearchBar;
