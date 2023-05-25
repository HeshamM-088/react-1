import React from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
  const { user, isLoading } = useAuth0();

  return (
    <div>
      <h1>App</h1>
      {isLoading ? <h1>loading</h1> : user ? <Logout /> : <Login />}
      <Profile />
    </div>
  );
};

export default App;
