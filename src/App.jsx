import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import LikeProvider from './context/LikeContext';

const App = () => {
  return (
    <div>
      <LikeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </LikeProvider>
    </div>
  );
};

export default App;
