import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, Form, FormGroup, Input, Label, Button, Navbar, NavbarBrand } from 'reactstrap';

import { addToDo, toggleToDo, deleteToDo, clearAll, clearCompleted } from '../actions/index';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {
    state = {
        newToDo: '',
        modal: false
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    modalClear = () => {
        this.props.clearAll();
        this.setState({
            modal: false
        })
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addToDo = e => {
        e.preventDefault();
        this.props.addToDo(this.state.newToDo);
        this.setState({
            newToDo: ''
        });
    };

    render() {
        console.log(this.props.toDo)
        return (
            <div>
                <Navbar color='secondary' className='text-white'>
                    <NavbarBrand className='mr-auto'>Redux To Do List</NavbarBrand>
                </Navbar>
                <div className='row justify-content-md-center'>
                    <div className='col-4 offset-auto justify-content-center mt-4'>
                        <ListGroup>
                            {this.props.toDo.map(toDo => (
                                <ToDoItem 
                                    key={Math.random()}
                                    toDoProp={toDo}
                                    toggleToDo={this.props.toggleToDo}
                                    deleteToDo={this.props.deleteToDo}
                                />
                            ))}
                        </ListGroup>
                        <Form onSubmit={this.addToDo}>
                            <FormGroup className='mt-3'>
                                <Label for="todo">What Do You Need To Do?</Label>
                                <Input onChange={this.handleChanges} type='text' name='newToDo' id='newToDo' placeholder='New To Do...' value={this.state.newToDo} />
                                <Button block className='mt-3' color='primary'>Add New To Do</Button>
                            </FormGroup>
                        </Form>
                        <Button block color='success' onClick={(this.props.toDo.find(todo => todo.completed === true)) ? this.props.clearCompleted : this.toggle} className='mb-3'>Clear Completed</Button>
                        <Button block color='warning' onClick={this.props.clearAll} className='mb-3'>Clear All</Button>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Warning!</ModalHeader>
                    <ModalBody>
                        It doesn't look like you have any items currently marked as completed. Would you like to clear all items?
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={this.modalClear} className='mr-2'>Clear All</Button>
                        <Button color='secondary' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        toDo: state.toDo
    }
}

export default connect(
    mapStateToProps,
    { addToDo, toggleToDo, deleteToDo, clearAll, clearCompleted }) (ToDoList)