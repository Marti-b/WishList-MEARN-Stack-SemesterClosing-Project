import { useEffect, useState } from "react";
import AddWish from "./AddWish";
import Wish from "./Wish";
import WishList from "./WishList";
import {Link, Router} from "@reach/router";

const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState("No data :(");

  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/hello`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data.msg);
    }
    getData();
  }, []);

  return (
    <>
      <nav>
        <Link to="/"> Home</Link>
      </nav>
    <Router>
      
      <WishList path="/">
        <AddWish path="/"/>
      </WishList>

      <Wish path="/wish/:id"/>
  
    </Router>
      
    </>
  );
}

export default App;
