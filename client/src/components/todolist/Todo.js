import React, { useContext } from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { GlobalContext } from '../../context/GlobalState';

export default function  Todo ({todo}){
  const { deleteTodo } = useContext(GlobalContext);
  let date = new Date(todo.finishedAt)
  
  return (
    <ListGroupItem>
      <h4>{todo.text}</h4> {'untill'} {date.toLocaleDateString()} {'   '}
      <Button onClick={()=> deleteTodo(todo._id)}>X</Button>
    </ListGroupItem>
  )
}
