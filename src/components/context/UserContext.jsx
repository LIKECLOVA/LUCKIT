import { createContext, useState } from 'react';

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [initialToken, setInitialToken] = useState(localStorage.getItem('token'));
  const [token, setToken] = useState(`Bearer ${localStorage.getItem('token')}`);
  const [myAccountname, setMyAccountname] = useState(localStorage.getItem('accountname'));
  const [myImage, setMyImage] = useState();

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        myAccountname,
        setMyAccountname,
        myImage,
        setMyImage,
        initialToken,
        setInitialToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
