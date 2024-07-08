import React, { useContext } from 'react';
import { LikeContext } from '../context/LikeContext';

const Favorites = () => {
  const { favorites } = useContext(LikeContext);

  console.log('rendering favoritos:', favorites); 

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map((photo, index) => (
          <div key={photo.id ? photo.id : index}>
            <img src={photo.src.medium} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

