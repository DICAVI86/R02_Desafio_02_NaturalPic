import { createContext, useState } from 'react';

export const LikeContext = createContext()

const LikeProvider = ({children}) => {
  const [likes, setLikes] = useState([]);

  return (
    
    <LikeContext.Provider 
      value={{
        likes,
        setLikes,
      }}
    >
      {children}
    </LikeContext.Provider>

  )
};

export default LikeContext