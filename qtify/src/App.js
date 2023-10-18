import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Section from "./components/carousel/Section";
import Accordion from "./components/Accordion";
import { useState, useEffect } from "react";
import { extractTopAlbumsData, extractNewAlbumsData } from "./apis/api";
import Divider from "@mui/material/Divider";

function App() {
  let [topAlbumsData, setTopAlbumsData] = useState([]);
  let [newAlbumsData, setNewAlbumsData] = useState([]);

  let displayTopAlbums = async () => {
    try {
      let data = await extractTopAlbumsData();
      setTopAlbumsData(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  let displayNewAlbums = async () => {
    try {
      let data = await extractNewAlbumsData();
      setNewAlbumsData(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    displayTopAlbums();
    displayNewAlbums();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="album" title="New Albums" />
      </div>
      <Divider />
      <Accordion />
    </div>
  );
}

export default App;
