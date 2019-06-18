import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';

const ToDoItem = props => {
    console.log(props.toggleToDo)
    return(
        <ListGroupItem onClick={() => props.toggleToDo(props.toDoProp)} style={{
            textDecoration: props.toDoProp.completed ? 'line-through' : 'none'
        }}>
            {props.toDoProp.value}
            <Button size='sm' color='danger' className='float-right'>Delete</Button>
        </ListGroupItem>
    )
}

export default ToDoItem;