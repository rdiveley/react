import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import { v4 as uuidv4 } from 'uuid';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </Header>
  );    
}

export default App;
