import React, { createContext, useContext } from "react";

// Create contexts
const UserContext = createContext();
const ThemeContext = createContext();

// App component
function App() {
  const user = { name: "John", role: "Admin" };
  const theme = "dark";

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={theme}>
        <Profile />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

// Profile component consuming multiple contexts
function Profile() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
      <p>Theme: {theme}</p>
    </div>
  );
}
