import React from 'react';
import { connect } from 'react-redux';

import { addToDo, toggleToDo } from '../actions/index';

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
        return (
            <div>
                <h1>To Do List!</h1>
                <ul>
                    <li>{this.props.value}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        value: state.value,
        completed: state.completed
    }
}

export default connect(
    mapStateToProps,
    { addToDo, toggleToDo }) (ToDoList)