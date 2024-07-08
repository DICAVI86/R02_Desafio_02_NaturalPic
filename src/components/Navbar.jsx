import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LikeContext } from '../context/LikeContext';

const Navbar = () => {
  const { favorites } = useContext(LikeContext);

  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos ({favorites.length}) </Link>
    </nav>
  );
};

export default Navbar;