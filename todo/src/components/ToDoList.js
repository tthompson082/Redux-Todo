import React from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';

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
            <div className='row justify-content-md-center'>
                <div className='col-4 offset-auto justify-content-center mt-2'>
                    <ListGroup>
                        {this.props.toDo.map(toDo => (
                            <ToDoItem 
                                key={Math.random()}
                                toDoProp={toDo}
                            />
                        ))}
                    </ListGroup>
                </div>
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