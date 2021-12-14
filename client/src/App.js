import { useEffect, useState } from "react";
import AddWish from "./AddWish";
import Wish from "./Wish";
import WishList from "./WishList";

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
      <h1>MERN App!</h1>
      <AddWish/>
      <Wish/>
      <WishList/>
      <p>Data from server: {data}</p>
    </>
  );
}

export default App;
