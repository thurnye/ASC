import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.scss';
import Main from './pages/main/main'
import NavBar from './components/navBar/navBar'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/"  element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
