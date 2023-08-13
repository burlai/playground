import React, { createContext, useContext } from "react";

// Create a context
const MyContext = createContext();

// Context provider
function MyProvider({ children }) {
  const contextValue = "Hello from context!";

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

// Component consuming context
function MyComponent() {
  const contextData = useContext(MyContext);
  return <div>{contextData}</div>;
}
