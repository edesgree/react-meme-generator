import memesData from '../memeData';
import React from 'react';

export default function Output() {
  const [memeImage, setMemeImage] = React.useState('');
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="output">
      <img src={memeImage} alt={memeImage} />
    </div>
  );
}
