import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    if (!photo.id) {
      console.error('Photo does not have an id:', photo);
      return;
    }
  
    let updatedFavorites;
    if (isFavorite(photo)) {
      updatedFavorites = favorites.filter(item => item.id !== photo.id);
      console.log('Removed from favorites:', photo);
    } else {
      updatedFavorites = [...favorites, photo];
      console.log('Added to favorites:', photo);
    }
    setFavorites(updatedFavorites);
  };

  const isFavorite = (photo) => {
    const isFav = favorites.some(fav => fav.id === photo.id);
    return isFav;
    
  };

  

  return (
    <LikeContext.Provider
      value={{
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
