import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row
} from 'reactstrap';

export default function Addtodocomponent() {
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [finishedAt, setFinishedAt] = useState();

  const { addTodo } = useContext(GlobalContext);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      text,
      finishedAt
    };

    addTodo(newTodo);
    setText('');
    setFinishedAt();
    toggle();
  };

  return (
    <div>
      <Container>
        <Row>
          <Button
            color="dark"
            className="d-flex justify-content-center"
            onClick={toggle}
            style={btnStyle}>
            Add todo
          </Button>
        </Row>
      </Container>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>Add todo to todolist</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="text"> What should you do?</Label>
              <Input
                type="text"
                id="text"
                name="name"
                placeholder="write a task"
                onChange={(e) => setText(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="finishedAt"> Untill when you should do </Label>
              <Input
                type="date"
                name="finishedAt"
                id="finishedAt"
                onChange={(e) => setFinishedAt(e.target.value)}></Input>
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Add todo
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const btnStyle = {
  marginTop: '2rem',
  marginBottom: '2rem'
};
