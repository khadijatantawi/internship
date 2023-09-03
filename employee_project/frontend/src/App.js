// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/login";
import Home from "./Home/home";
import AddRecord from "./AddRecord/AddRecord";
import PrivateRoute from "./context/privateRoute";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/home" element={<PrivateRoute />}>
            <Route exact path="/home" element={<Home />} />
          </Route>
          <Route exact path="/AddRecord" element={<PrivateRoute />}>
            <Route path="/AddRecord" element={<AddRecord />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
