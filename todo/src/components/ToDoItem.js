import React from 'react';

const ToDoItem = props => {
    return(
        <div>
            <p>{props.toDoProp.value}</p>
        </div>
    )
}

export default ToDoItem;