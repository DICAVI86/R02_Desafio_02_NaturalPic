import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/Navbar"
import Favorites from "../src/views/Favorites"
import NotFound from "./views/NotFound";
import LikeProvider from "./context/LikeContext";
import Home from "./views/Home"

const App = () => {
  return (
    <LikeProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LikeProvider>
  );
};
export default App;