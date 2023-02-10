import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskA from './components/TaskA';
import TaskB from './components/TaskB';
import TaskC from './components/TaskC';


class App extends Component {
  state = {
    id: 1001,
    firstName: "Abigale",
    arr: [33, 12, 15, 16],
    isAlive: 'true',
    strOrNum: true
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<TaskA />} />
            <Route path='/taska' element={<TaskA />} />
            <Route path='/taskb' element={<TaskB />} />
            <Route path='/taskc' element={
              <TaskC
                id={this.state.id}
                firstName={this.state.firstName}
                arr={this.state.arr}
                isMarried={this.state.isMarried}
                isAlive={this.state.isAlive}
                strOrNum={this.state.strOrNum}
              />
            } />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;