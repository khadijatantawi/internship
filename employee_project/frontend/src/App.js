// import logo from './logo.svg';
import "./App.css";
import React, { useContext } from "react";
import Register from "./Register/Register";
import Login from "./Login/login";
import Home from "./Home/home";
import AddRecord from "./AddRecord/AddRecord";
import { AuthProvider } from "./context/AuthProvider";
import AuthContext from "./context/AuthProvider";
import { BrowserRouter } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./context/privateRoute";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <main className="App">
      {/* < Register /> */}
      <BrowserRouter>
    
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/home" element={<PrivateRoute/>}>
              <Route exact path="/home" element={<Home />} />
            </Route>
            {/* <Route exact path="/home" element={<Home />} /> */}
            <Route exact path="/AddRecord" element={<PrivateRoute/>}>
            <Route path="/AddRecord" element={<AddRecord />} />
            </Route>
          </Routes>

      </BrowserRouter>
    </main>
  );
}

export default App;
