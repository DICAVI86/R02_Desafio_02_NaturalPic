import React, { createContext, useState } from 'react';

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photo) => {
    let updatedFavorites;
    if (isFavorite(photo)) {

      updatedFavorites = favorites.filter(item => item.id !== photo.id);
      console.log('Remover de favoritos', photo);
    } else {
      // Agregar la foto a favorites si no está presente
      updatedFavorites = [...favorites, photo];
      console.log('Añadir a favoritos', photo);
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
