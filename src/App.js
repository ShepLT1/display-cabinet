import React from 'react';
import './App.css';
import Login from "./components/auth/login"
import Logout from "./components/auth/logout"
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated ? (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Logout />
    </div>
  ) : (
    <div>
      <Login />
    </div>
  );
}

export default App;
