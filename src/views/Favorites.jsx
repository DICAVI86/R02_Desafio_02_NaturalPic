import React, { useContext } from 'react';
import { LikeContext } from '../context/LikeContext';

const Favorites = () => {
  const { favorites } = useContext(LikeContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favorites.map((photo, index) => (
          <div key={index}>
            <img src={photo.src.medium} alt={photo.alt} />
            {/* Puedes agregar más detalles de la foto si es necesario */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
