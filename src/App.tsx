import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Name from './components/Nome';
import Admin from './components/Admin';
import Edit from './components/Edit';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Name/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
