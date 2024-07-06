import { createContext, useState } from 'react';

export const likeContext = createContext()

const likeProvider = ({children}) => {
  const [likes, setLikes] = useState([]);

  return (

    <likeContext.Provider 
      value={{
        likes,
        setLikes,
      }}
    >
      {children}
    </likeContext.Provider>

  )
};

export default likeContext