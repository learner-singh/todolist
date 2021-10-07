import React, { useState, useEffect } from "react";
import Profile from "./Profile";
// import Home from './Home'

function getLocalUserRecords() {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  } else {
    return {};
  }
}

function RegistrationForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    username: "",
    password: "",
    todoList: [],
  });
  const [userList, setUserList] = useState(getLocalUserRecords());

  const addUser = (e) => {
    e.preventDefault();

    if (userList[user.username]) {
      alert("username already exist");
      return;
    }

    setUserList(() => ({
      [user.username]: {
        id: Date.now(),
        userDetails: user,
        todoList: [],
      },
      ...userList,
    }));

    alert("user successfully registered");
  };

  useEffect(() => {
    // reseting form values
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      username: "",
      password: "",
    });

    // updating users in db
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  return (
    <div>
      <form className="registrationForm" onSubmit={addUser}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          name="occupation"
          id="occupation"
          value={user.occupation}
          onChange={(e) => setUser({ ...user, occupation: e.target.value })}
        />
        <label htmlFor="username">User Name:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Sign Up</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
