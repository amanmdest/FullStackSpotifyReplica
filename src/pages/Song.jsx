import React from 'react'
import Player from './Player';
import { Link } from 'react-router-dom';

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
            < img
              src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" 
              alt="Image da Música"
            />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1" className="song__artist-image">
          <img 
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab67616100005174668a5535093f4cc53b1fef45" 
            alt="Imagem do Artista y" 
          />
        </Link>

        <Player />

        <div>
          <p className="song__name">Última Saudade - Ao Vivo</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  );
};

export default Song