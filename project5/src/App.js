import React from 'react';
import Site from './Containers/site/Site';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Site></Site>
    </BrowserRouter>
  );
}

export default App;
