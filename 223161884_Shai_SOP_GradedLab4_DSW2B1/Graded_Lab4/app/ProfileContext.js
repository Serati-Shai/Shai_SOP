import React, { createContext, useContext, useState } from 'react';


const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const updateUserData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => useContext(UserContext);