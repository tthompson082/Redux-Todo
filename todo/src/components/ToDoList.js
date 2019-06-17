import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Form, FormGroup, Input, Label, Button, Navbar, NavbarBrand } from 'reactstrap';

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
                    <div className='col-4 offset-auto justify-content-center mt-2'>
                        <ListGroup>
                            {this.props.toDo.map(toDo => (
                                <ToDoItem 
                                    key={Math.random()}
                                    toDoProp={toDo}
                                    toggleToDo={this.props.toggleToDo}
                                />
                            ))}
                        </ListGroup>
                        <Form onSubmit={this.addToDo}>
                            <FormGroup className='mt-3'>
                                <Label for="todo">What Do You Need To Do?</Label>
                                <Input onChange={this.handleChanges} type='text' name='newToDo' id='newToDo' placeholder='New To Do...' value={this.state.newToDo} />
                                <Button className='mt-3' color='primary'>Add New To Do</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
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
    { addToDo, toggleToDo }) (ToDoList)