import React, { createContext, useContext } from "react";
import { render, screen } from "@testing-library/react";

// Create a context
const TestContext = createContext();

// Mocked provider for testing
function MockTestProvider({ children }) {
  const testData = "Mocked test data";

  return (
    <TestContext.Provider value={testData}>{children}</TestContext.Provider>
  );
}

// Component consuming context for testing
function TestComponent() {
  const testData = useContext(TestContext);
  return <div>{testData}</div>;
}

// Test using React Testing Library
it("renders the correct test data", () => {
  render(
    <MockTestProvider>
      <TestComponent />
    </MockTestProvider>
  );

  expect(screen.getByText("Mocked test data")).toBeInTheDocument();
});
