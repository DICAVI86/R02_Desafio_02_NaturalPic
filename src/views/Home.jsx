import React from "react";
import Gallery from "../components/Gallery";
import LikeProvider from '../context/LikeContext'


const Home = () => {
  return (
    <LikeProvider>
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery />
    </div>
    </LikeProvider>
  );
};
export default Home;
