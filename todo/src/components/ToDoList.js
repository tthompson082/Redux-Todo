import React from 'react';
import { connect } from 'react-redux';

import { addToDo, toggleToDo } from '../actions/index';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    state = {
        newToDo: ''
    };

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addToDo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newToDo);
        this.setState({
            newToDo: ''
        });
    };

    render() {
        console.log(this.props.toDo)
        return (
            <div>
                <h1>To Do List!</h1>
                <ul>
                    {this.props.toDo.map(toDo => (
                        <ToDoItem 
                            key={Math.random()}
                            toDoProp={toDo}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toDo: state.toDo
    }
}

export default connect(
    mapStateToProps,
    { addToDo, toggleToDo }) (ToDoList)