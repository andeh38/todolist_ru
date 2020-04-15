import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AppNavbar from './components/AppNavbar';
import { GloblaProvider } from './context/GlobalState';
import {GridComponent}from './components/todolist/GridComponent'

function App() {
  return (
    <GloblaProvider>
      <div className="App">
        <AppNavbar></AppNavbar>
        <GridComponent></GridComponent>
      </div>
    </GloblaProvider>
  );
}

export default App;
