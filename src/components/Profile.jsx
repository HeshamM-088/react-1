import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactPretty from "react-json-pretty";
const Profile = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <h1>Profile</h1>

      {user ? (
        <div>
          <img src={`${user.picture}`} width="20%" />
          <h1>First Name : {user.given_name}</h1>
          <h1>Last Name : {user.family_name}</h1>
          <h1>User Name : {user.nickname}</h1>
          <h1>Email : {user.email}</h1>
        </div>
      ) : (
        <h1>User Must Login</h1>
      )}
    </div>
  );
};

export default Profile;
