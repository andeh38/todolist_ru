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
      finishedAt,
    };

    addTodo(newTodo);
    setText('');
    setFinishedAt();
    toggle();
  };

  return (
    <div>
      <Button
        color="dark"
        /*           className="d-flex justify-content-center"
          style={btnStyle} */
        onClick={toggle}>
        Добавить задачу
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>Добавить задачу в список дел</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="text"> Что нужно сделать?</Label>
              <Input
                type="text"
                id="text"
                name="name"
                placeholder="напишите что-нибудь..."
                onChange={(e) => setText(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
              <Label for="finishedAt"> Когда нужно это сделать </Label>
              <Input
                type="date"
                name="finishedAt"
                id="finishedAt"
                onChange={(e) => setFinishedAt(e.target.value)}></Input>
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Добавить задачу в список
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
  marginBottom: '2rem',
};
