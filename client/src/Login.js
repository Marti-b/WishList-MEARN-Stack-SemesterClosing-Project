import { useState } from "react";
import apiService from "./apiService";

function Login(props) {
  const { login, logout } = props;
//   console.log("login props", props);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password)
    function onSubmit() {
      login(username, password);
    }
    function onCancel() {
      apiService.logout();
      window.location.reload(false);
    }
  return (
    <>
      {apiService.loggedIn() ? (
        <>  
        <p>You are logged in, return to the Home page or log out:</p>
        <button type="button" onClick={() => onCancel()}>
        Log out!
      </button>
        </>
    
      ) : (
        <>
          <h3>Login</h3>

          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
            placeholder="username"
          ></input>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="password"
          ></input>

      <button type="button" onClick={() => onSubmit()}>
        Login!
      </button>
        </>
      )}
    </>
  );
}
export default Login;
