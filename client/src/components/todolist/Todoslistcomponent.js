import React, { useEffect, useContext } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';
import Todo from './Todo';

export default function Todoslistcomponent() {
  const { todos, getTodos } = useContext(GlobalContext);

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ListGroup>
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo}></Todo>
        ))}
        
      </ListGroup>
    </Container>
  );
}
