import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import { extractTopAlbumsData } from "./apis/api";

function App() {
  let [topAlbumsData, setTopAlbumsData] = useState([]);

  let displayTopAlbums = async () => {
    try {
      let data = await extractTopAlbumsData();
      setTopAlbumsData(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    displayTopAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flexbox">
        {topAlbumsData.map((item) => {
          return <Card data={item} type="album" />;
        })}
      </div>
    </div>
  );
}

export default App;
