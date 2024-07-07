import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    if (isFavorite(photo)) {
      setFavorites(favorites.filter(item => item.id !== photo.id));
    } else {
      setFavorites([...favorites, photo]);
    }
  };

  const isFavorite = (photo) => {
    return favorites.some(fav => fav.id === photo.id);
  };

  return (
    <LikeContext.Provider
      value={{
        likes,
        setLikes,
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </LikeContext.Provider>
  );
};

export default LikeProvider;
