import { useEffect, useState } from "react";
import AddWish from "./AddWish";
import Wish from "./Wish";
import WishList from "./WishList";
import {Link, Router} from "@reach/router";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [list, setData] = useState([
    { 
      "id": 1,"title": "Apple iPhone 12 Pro"
    },
    { 
      "id": 2,"title": "ADATA HD650 - 2TB HDD"
    },
    { 
      "id": 3,"title": "Philips OneBlade Face Razor"
    },
    { 
      "id": 4,"title": "The Rational Male - Preventive Medicine"
    }
  ])
  // useEffect(() => {
  //   async function getData() {
  //     const url = `${API_URL}/hello`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setData(data.msg);
  //   }
  //   getData();
  // }, []);
  function getWish(id){
    let wish = list.find(x => x.id.toString() === id)
    return wish;
  }
function addWish(title){
  const newWish = {
    id : list.length + 1,
    title : title
  }
  setData([...list, newWish])
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
