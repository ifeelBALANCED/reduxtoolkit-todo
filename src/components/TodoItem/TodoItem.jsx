import { Checkbox, IconButton, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { toggleComplete, removeTodo } from "../../store/slices/todoSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import React from 'react';

const TodosItem = ({ id, text, completed }) => {
    const dispatch = useDispatch()
    const complete = () => dispatch(toggleComplete({ id }))
    const remove = () => dispatch(removeTodo({ id }))

    return (
        <ListItem
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={remove}
                >
                    <DeleteIcon/>
                </IconButton>
            }
        >
            <ListItemAvatar>
                <Checkbox
                    checked={completed}
                    onChange={complete}
                />
            </ListItemAvatar>
            <ListItemText sx={{textDecoration: completed ? 'line-through': ''}}>{text}</ListItemText>
        </ListItem>
    );
};

export default TodosItem;
