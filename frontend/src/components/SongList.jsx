import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // const items = useState(5)
  // console.log(items)
  
  const [items, setItems] = useState(5);
  // console.log(items)
  // let items = 5

  return (
    <div className="song-list">
      {songsArray
      .filter((currentSongObj, index) => index < items)
      .map((currentSongObj, index) => (
        <SongItem {...currentSongObj} index={index} key={index} />
      ))}
      
     <p 
      className="song-list__see-more" 
      onClick={() => {
        setItems(items + 5);
        // items += 5;
        console.log(items);
      }}> Ver Mais </p>
    </div>
  )
};

export default SongList