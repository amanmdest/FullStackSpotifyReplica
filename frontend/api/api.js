import axios from "axios";

// const { NODE_ENV } = process.env
// const URL = NODE_ENV === "development" ? "localhost:3000/api" : "/api";
const URL = "http://localhost:3000/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistsArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
