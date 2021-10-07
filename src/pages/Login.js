import React, {useState} from "react";

function Login(props) {

  const [userCredential, setUserCredential] = useState({username: "", password: ""})

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        props.onLogin(userCredential)
      }}>
        <label>User Name:</label>
        <input
          type="text"
          value={userCredential.username}
          onChange={(e) =>
            setUserCredential({ ...userCredential, username: e.target.value })
          }
        />
        <label>Password:</label>
        <input
          type="password"
          value={userCredential.password}
          onChange={(e) =>
            setUserCredential({ ...userCredential, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
