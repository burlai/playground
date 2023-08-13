import React, { createContext, useContext } from "react";

// Create multiple contexts
const ContextA = createContext();
const ContextB = createContext();

// Context providers
function ProviderA({ children }) {
  const valueA = "Value from Context A";
  return <ContextA.Provider value={valueA}>{children}</ContextA.Provider>;
}

function ProviderB({ children }) {
  const valueB = "Value from Context B";
  return <ContextB.Provider value={valueB}>{children}</ContextB.Provider>;
}

// Component consuming multiple contexts
function MultiContextComponent() {
  const dataA = useContext(ContextA);
  const dataB = useContext(ContextB);

  return (
    <div>
      Context A: {dataA}
      <br />
      Context B: {dataB}
    </div>
  );
}
