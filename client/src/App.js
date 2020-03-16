import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import BreadcrumbsComponent from './components/BreadcrumbsComponent';
import DropdownComponent from './components/DropdownComponent';
import CardComponent from './components/CardComponent';
import CarouselComponent from './components/CarouselComponent';
import NavtabComponent from './components/NavtabComponent';
import Addtodocomponent from './components/todolist/Addtodocomponent';
import { GloblaProvider } from './context/GlobalState';
import Todoslistcomponent from './components/todolist/Todoslistcomponent'

function App() {
  return (
    <GloblaProvider>
      <div className="App">
        <NavtabComponent>
          <>
            <AppNavbar></AppNavbar>
            <BreadcrumbsComponent></BreadcrumbsComponent>
            <DropdownComponent></DropdownComponent>
          </>
          <>
            <AppNavbar></AppNavbar>
            <CardComponent></CardComponent>
            <CarouselComponent></CarouselComponent>
          </>
          <>
            <Addtodocomponent></Addtodocomponent>
            <Todoslistcomponent></Todoslistcomponent>
          </>
        </NavtabComponent>
      </div>
    </GloblaProvider>
  );
}

export default App;
