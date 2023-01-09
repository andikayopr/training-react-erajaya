import React from "react";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";
import List from "./components/MovieList";

function RoutesApp() {
  return (
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/favorite" element={<List />} />
    </Routes>
  );
}

export default RoutesApp;
