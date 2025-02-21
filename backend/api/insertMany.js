// import { artistsArray } from "../../front-end/src/assets/database/artists.js"
import { songsArray } from "../../front-end/src/assets/database/songs.js"
import { db } from "./connect.js";

const newArtistsArray = artistsArray.map((currentArtistsObj) => {
    const newArtistsObj = { ...currentArtistsObj };
    delete newArtistsObj.id;

    return newArtistsObj;
}) 

const newSongsArray = songsArray.map((currentSongsObj) => {
    const newSongsObj = { ...currentSongsObj };
    delete newSongsObj.id

    return newSongsObj
}) 

console.log(newArtistsArray)
console.log(newSongsArray)

const artistsResponse = await db.collection("artists").insertMany(newArtistsArray)
const songsResponse = await db.collection("songs").insertMany(newSongsArray)

console.log(artistsResponse)
console.log(songsResponse)