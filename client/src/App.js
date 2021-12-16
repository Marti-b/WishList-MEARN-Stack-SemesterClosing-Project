import { useEffect, useState } from "react";
import AddWish from "./AddWish";
import Wish from "./Wish";
import WishList from "./WishList";
import {Link, Router} from "@reach/router";
import './App.css';

const API_URL = process.env.REACT_APP_API;

function App() {
  const [list, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("Data getting from the server: ", data)
      setData(data);
    }
    getData();
  }, []);

  function getWish(id){
    let wish = list.find(x => x._id === id)
    return wish;
  }

function addWish(title){
  const newWish = {
    title : title
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
  return (
    <>
      <nav>
        <Link to="/"> Home</Link>
      </nav>
    <Router>
      
      <WishList data={list} path="/">
        <AddWish addWish={addWish} path="/"/>
      </WishList>

      <Wish getWish={getWish} path="/wish/:id"/>
  
    </Router>
      
    </>
  );
}

export default App;
