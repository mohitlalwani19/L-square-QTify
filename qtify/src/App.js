import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Section from "./components/carousel/Section";
import Accordion from "./components/Accordion";
import { useState, useEffect } from "react";
import {
  extractTopAlbumsData,
  extractNewAlbumsData,
  extractSongsData,
} from "./apis/api";
import Divider from "@mui/material/Divider";

function App() {
  let [topAlbumsData, setTopAlbumsData] = useState([]);
  let [newAlbumsData, setNewAlbumsData] = useState([]);
  let [songsData, setSongsData] = useState([]);
  let [filteredDataValues, setFilteredDataValues] = useState([]);
  let [value, setValue] = useState(0);

  let handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let filteredData = (value) => {
    setFilteredDataValues(value);
  };

  let displayTopAlbums = async () => {
    try {
      let data = await extractTopAlbumsData();
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  let displayNewAlbums = async () => {
    try {
      let data = await extractNewAlbumsData();
      setNewAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  let displayAllSongs = async () => {
    try {
      let data = await extractSongsData();
      setSongsData(data);
      setFilteredDataValues(data);
    } catch (err) {
      console.error(err);
    }
  };

  let displaySongs = (value) => {
    let key;

    switch (value) {
      case 0: {
        filteredData(songsData);
        return;
      }
      case 1: {
        key = "rock";
        break;
      }
      case 2: {
        key = "pop";
        break;
      }
      case 3: {
        key = "jazz";
        break;
      }
      case 4: {
        key = "blues";
        break;
      }
      default: {
      }
    }
    let res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    displaySongs(value);
  }, [value]);

  useEffect(() => {
    displayTopAlbums();
    displayNewAlbums();
    displayAllSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section
          data={topAlbumsData}
          type="album"
          title="Top Albums"
          filteredDataValues={topAlbumsData}
        />
        <Section
          data={newAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={newAlbumsData}
        />
      </div>
      <Divider />
      <div>
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <Divider />
      <Accordion />
    </div>
  );
}

export default App;
