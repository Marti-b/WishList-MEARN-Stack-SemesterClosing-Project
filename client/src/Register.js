import { useState } from "react";

function Register(props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return(
        <>
        <div className="register">
        <h3>Register</h3>
        <div className="userName">
        <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            name="username"
            placeholder="username"
          ></input>
        </div>
        <div className="password"> 
            <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            placeholder="password"
          >

          </input>
        </div>
         
          <button
            
            type="submit"
            onClick={(event) => {
              props.register(username, password);
            }}
          >
            Register!
          </button>
        </div>
         
        </>
    )
}
export default Register;