import React from 'react';
import { ListGroupItem } from 'reactstrap';

const ToDoItem = props => {
    console.log(props.toggleToDo)
    return(
        <ListGroupItem onClick={() => props.toggleToDo(props.toDoProp)} style={{
            textDecoration: props.toDoProp.completed ? 'line-through' : 'none'
        }}>
            {props.toDoProp.value}
        </ListGroupItem>
    )
}

export default ToDoItem;