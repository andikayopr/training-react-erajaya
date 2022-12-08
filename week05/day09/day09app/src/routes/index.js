import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Awards from "../pages/Awards";
import Items from "../pages/Items";
import Item from "../pages/Item";
import ProtectedRoute from "../components/ProtectedRoute";
import Login from "../pages/Login";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}>
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="/about" element={<About />}>
        <Route path="awards" element={<Awards />} />
      </Route>
      <Route
        path="/items"
        element={
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        }
      >
        <Route path=":itemId" element={<Item />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default RoutesApp;
