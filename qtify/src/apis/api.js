import axios from "axios";

export let endpoint = "https://qtify-backend-labs.crio.do";

export let extractTopAlbumsData = async () => {
  try {
    let res = await axios.get(`${endpoint}/albums/top`);
    return res;
  } catch (err) {
    console.error(err);
  }
};