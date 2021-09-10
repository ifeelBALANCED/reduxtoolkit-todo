import { getTodos } from "../../store/selectors/selectors";
import TodosItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";
import React from 'react';

const TodosList = () => {
    const todos = useSelector(getTodos)
    const generateItems = todos.map(todo => <TodosItem key={todo.id} {...todo}/>)

    return (
        <List>
            {generateItems}
        </List>
    );
};

export default TodosList;
