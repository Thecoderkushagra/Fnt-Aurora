import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [User, setUser] = useState({
    jwt: null,
    userId:null,
    userName: null,
    role: null,
  });

  const [appState, setAppState] = useState({
    // Add your state properties here
  });

  const updateAppState = (newState) => {
    setAppState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  // The value provided to the context
  const contextValue = {
    appState,
    updateAppState,
    User,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// exception handling for useAppContext to ensure it's used within AppProvider
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
