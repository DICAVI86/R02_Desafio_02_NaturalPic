import { createContext, useEffect, useState } from "react";


export const LikeContext = createContext();

const FotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const getFotos = async () => {
    const response = await fetch('/photos.json'); 

    const result = await response.json();
    console.log(result.photos);
    setPhotos(result.photos || []);
};

  useEffect(() => {
    getFotos();
  }, []);

  return (
    <LikeContext.Provider value={{ photos, setPhotos }}>
      {children}
    </LikeContext.Provider>
  );
};

export default FotosProvider;