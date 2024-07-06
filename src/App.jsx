import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import likeProvider from './context/LikeContext'

const App = () => {
  return (
    <div>
      <Navbar />
      <likeProvider>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
      </likeProvider>
    </div>
  );
};
export default App;
