import React from 'react';
import { ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        return(
            <ListGroupItem>
                <span onClick={() => this.props.toggleToDo(this.props.toDoProp)} style={{textDecoration: this.props.toDoProp.completed ? 'line-through' : 'none'}}>{this.props.toDoProp.value}</span>
                <Button onClick={
                    (this.props.toDoProp.completed) ? () => this.props.deleteToDo(this.props.toDoProp) : this.toggle
                } 
                
                size='sm' color='danger' className='float-right'>Delete</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Warning!</ModalHeader>
                    <ModalBody>
                        The item you are about to delete has not been marked as completed. Are you sure you want to delete it?
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={() => this.props.deleteToDo(this.props.toDoProp)} className='mr-2'>Delete</Button>
                        <Button color='secondary' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </ListGroupItem>
        )
    }
}

export default ToDoItem;