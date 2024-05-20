import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Home from "./pages/main/Home";
import Product from "./pages/main/Product";
import Profile from "./pages/main/Profile";

// import PublicRoute from "./components/Routes/PublicRoute";
// import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
