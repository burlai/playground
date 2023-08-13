import React, { createContext, useContext } from "react";

// Create a context with a default value
const MyContext = createContext("Default Value");

// Context provider
function MyProvider({ children }) {
  const contextValue = "Hello from context!";

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

// Component consuming context with default value
function MyComponent() {
  const contextData = useContext(MyContext);
  return <div>{contextData}</div>;
}
