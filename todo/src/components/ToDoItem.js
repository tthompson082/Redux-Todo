import React from 'react';
import { ListGroupItem } from 'reactstrap';

const ToDoItem = props => {
    return(
        <ListGroupItem style={{
            textDecoration: props.toDoProp.completed ? 'line-through' : 'none'
        }}>
            {props.toDoProp.value}
        </ListGroupItem>
    )
}

export default ToDoItem;