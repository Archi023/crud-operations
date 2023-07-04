import React from "react";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Create}></Route>
      <Route exact path="/read" Component={Read}></Route>
      <Route exact path="/update" Component={Update}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
