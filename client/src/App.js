import { useEffect, useState } from "react";
import AddWish from "./AddWish";
import Wish from "./Wish";
import WishList from "./WishList";
import {Link, Router} from "@reach/router";
import './App.css';
import AddComment from "./AddComment";
import Login from "./Login";
import apiService from "./apiService";
import Register from "./Register";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [list, setData] = useState([])


  async function getData() {
    // We now use `apiService.get()` instead of `fetch()`
    try {
      const data = await apiService.get('/');
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

 useEffect(() => {
    getData();
  }, []);
// Login using API
  async function login(username, password) {
  try {
    await apiService.login(username, password);
    // Fetch data again after logging in
    getData();
    console.log("Login works");
  } catch (error) {
    console.error("Login", error);
  }
}
async function logout(username, password) {
  try {
    await apiService.logout();
    // Fetch data again after logging out in
    getData();
    console.log("Logged out");
  } catch (error) {
    console.error("Login", error);
  }
}
  function getWish(id){
    let wish = list.find(x => x._id === id)
    return wish;
  }

function addWish(title, dsc, link){
  const newWish = {
    title : title,
    descriptions : dsc,
    externalLink: link
  }
  fetch(`${API_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newWish)
  })
  .then(response => response.json())
  .then(data => setData([...list, data]))
  .catch((error) => {
    console.error('Error:', error);
  });
}

function addComment(id, name, comment){
  const newComment = {
    username: name,
    content: comment
  };
  fetch(`${API_URL}/wish/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newComment)
  })
  .then(res => res.json())
  .then(async () => {
    const url = `${API_URL}/`;
    const response = await fetch(url);
    const data = await response.json();
    //console.log("Data getting from the server: ", data)
    setData(data);
  })
}
async function register(username, password){
  const newUser = {
    username: username,
    password: password
  };
  fetch(`${API_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
  .then(response => response.json())
  .then(alert("Registration is successful. Go to log in!"));

}

  return (
    <>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register"> Register</Link>
      </nav>
    <Router>

      <WishList data={list} path="/">
        <AddWish addWish={addWish} path="/"/>
       
      </WishList>

      <Wish getWish={getWish} path="/wish/:id">
        <AddComment addComment={addComment} path="/"/>
      </Wish>
      <Login login={login} logut={logout} path="/login"/>
      <Register register={register} path="/register"/>
    </Router>
      
    </>
  );
}

export default App;
