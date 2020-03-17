import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import Addtodocomponent from './components/todolist/Addtodocomponent';
import { GloblaProvider } from './context/GlobalState';
import Todoslistcomponent from './components/todolist/Todoslistcomponent';

function App() {
  return (
    <GloblaProvider>
      <div className="App">
        <AppNavbar></AppNavbar>
        <Addtodocomponent></Addtodocomponent>
        <Todoslistcomponent></Todoslistcomponent>
      </div>
    </GloblaProvider>
  );
}

export default App;
