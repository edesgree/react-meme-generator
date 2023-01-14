import React from 'react';
import memesData from '../memeData';

function Meme() {
  const [memeImage, setMemeImage] = React.useState({
    topText: 'hello',
    bottomText: 'world',
    url: 'http://i.imgflip.com/1bij.jpg'
  });
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage((prevData) => ({
      ...prevData,
      url: url
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMemeImage((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          className="input"
          type="text"
          name="topText"
          placeholder="First text"
          onChange={handleChange}
          value={memeImage.topText}
        />
        <input
          className="input"
          type="text"
          name="bottomText"
          placeholder="Second text"
          onChange={handleChange}
          value={memeImage.bottomText}
        />
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="output">
        <span className="text-top">{memeImage.topText}</span>
        <span className="text-bottom">{memeImage.bottomText}</span>
        <img src={memeImage.url} />
      </div>
    </main>
  );
}

export default Meme;
