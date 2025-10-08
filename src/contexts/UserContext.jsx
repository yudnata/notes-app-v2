/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useMemo } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(null);

  const onLogout = () => {
    setAuthedUser(null);
    localStorage.removeItem('accessToken');
  };

  const contextValue = useMemo(() => {
    return {
      authedUser,
      setAuthedUser,
      onLogout,
    };
  }, [authedUser]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
