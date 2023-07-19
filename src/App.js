import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/chat.css';
import './styles/home.css';
import './styles/input.css';
import './styles/message.css';
import './styles/messages.css';
import './styles/navbar.css';
import './styles/register.css';
import './styles/search.css';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home"  element={<Home />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
