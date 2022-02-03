import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

function App() {
  const [name, setName] = useState('')

  useEffect(() => {
    (
      async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json()

      setName(content.name)
    })();
  });
  
  return (
    <div className="App">
      <Nav name={name}/>
      <header className="App-header">
        <main className="form-signin">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={() => <Users name={name} />} />
          </Routes>
        </main>
      </header>
    </div>
  );
}

export default App;
