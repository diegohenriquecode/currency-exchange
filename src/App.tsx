import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/ui/Header";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className='min-h-screen flex flex-col over'>
      <Home />
    </div>
  );
}

export default App;
