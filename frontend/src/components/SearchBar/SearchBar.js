import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import './SearchBar.css';

function SearchBar({ list, onInputChange, onEnter }) {
    const [input, setInput] = useState("");

    return (
        <Autocomplete
            className="search-bar-autocomplete"
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
                    className="search-bar-input"
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
                                    className="search-icon"
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
