import React, { useState, useContext, useEffect } from 'react';
import { Button,  } from 'reactstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { GlobalContext } from '../../context/GlobalState';
import Addtodocomponent from './Addtodocomponent';

export const GridComponent = () => {
  const { todos, getTodos, deleteTodo,  } = useContext(
    GlobalContext
  );

  const [gridApi, setGridApi] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Задача',
      field: 'text',
      sortable: true,
      filter: true,
      rowDrag: true,
      resizable: true,
      cellStyle: { 'white-space': 'normal' },
      autoHeight:true,
      checkboxSelection: true,
      flex: 10,
    },
    {
      headerName: 'Сделать до',
      field: 'finishedAt',
      sortable: true,
      filter: true,
      autoHeight: true,
      flex: 2,
      sort: 'asc',
    },
  ]);

  const onClick = (e) => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedId = selectedNodes.map((node) => node.data.id);
    console.log(typeof selectedId);
    console.log(selectedId);
    deleteTodo(selectedId);
  };

  useEffect(() => {
    getTodos();
  });

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ height: '800px', width: '60%', marginLeft: '20%' }}>
      <div className="d-flex justify-content-between">
        <Addtodocomponent></Addtodocomponent>
        <Button onClick={onClick} color="dark" style={{ marginBottom: '1rem' }}>
          Удалить выбранные задачи
        </Button>
      </div>

      <AgGridReact
        onGridReady={(params) => setGridApi(params.api)}
        rowSelection="multiple"
        rowDragManaged={true}
        animateRows={true}
        columnDefs={columnDefs}
        rowData={todos.map((todo) => {
          return {
            text: todo.text,
            finishedAt: new Date(todo.finishedAt).toLocaleDateString(),
            id: todo._id,
          };
        })}></AgGridReact>
    </div>
  );
};
