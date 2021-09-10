import { Box, Button, TextField } from "@material-ui/core";
import { addTodo } from "../../store/slices/todoSlice";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { sx } from "./styles"

const FieldInput = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const onInputChange = ({ target: { value } }) => setValue(value)

    const onAddClick = () => {
        if (!value.trim().length) return
        dispatch(addTodo(value))
        setValue('')
    }

    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            onAddClick()
        }
    }

    return (
        <Box sx={sx} row>
            <TextField
                sx={sx.field}
                value={value}
                onChange={onInputChange}
                onKeyPress={handleKeyPress}
                label="Enter value"
                variant="standard"
            />
            <Button
                variant="outlined"
                size="medium"
                onClick={onAddClick}
            >
                Add
            </Button>
        </Box>
    );
};

export default FieldInput;
