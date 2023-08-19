import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const category = "happiness";

  const config = {
    headers: { "X-Api-Key": import.meta.env.VITE_API_KEY },
  };

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}?category=${category}`, config)
      .then((res) => {
        console.log("This is my quotes: " + res.data[0].quote);
        setQuote(res.data[0].quote);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>Quote Generator</h1>
      <div>{!quote ? <p>Here is your quote</p> : <p>{quote}</p>}</div>
      <button onClick={fetchData}>Generate</button>
    </>
  );
}

export default App;
