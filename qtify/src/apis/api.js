import axios from "axios";

export let endpoint = "https://qtify-backend-labs.crio.do";

export let extractTopAlbumsData = async () => {
  try {
    let res = await axios.get(`${endpoint}/albums/top`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export let extractNewAlbumsData = async () => {
  try {
    let res = await axios.get(`${endpoint}/albums/new`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export let extractSongsData = async () => {
  try {
    let res = await axios.get(`${endpoint}/songs`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
