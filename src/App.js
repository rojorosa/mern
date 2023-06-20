import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";

import './chat.css';
import './home.css';
import './navbar.css';
import './register.css';
import './search.css';
import './messages.css';
import './input.css';
import './message.css';

function App() {
  return (
    <div>
    <Register/>
    <Login/>
    <Home/>
    </div>
  );
}

export default App;
