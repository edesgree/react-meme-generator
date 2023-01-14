import React from 'react';
import memesData from '../memeData';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: 'hello',
    bottomText: 'world',
    url: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemes, setAllMemes] = React.useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const randomUrl = allMemes[randomNumber].url;
    setMeme((prevData) => ({
      ...prevData,
      url: randomUrl
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
  React.useEffect(() => {
    // get image data from API
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);
  return (
    <main>
      <div className="form">
        <input
          className="input"
          type="text"
          name="topText"
          placeholder="First text"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          className="input"
          type="text"
          name="bottomText"
          placeholder="Second text"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button type="submit" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="output">
        <span className="text-top">{meme.topText}</span>
        <span className="text-bottom">{meme.bottomText}</span>
        <img src={meme.url} />
      </div>
    </main>
  );
}

export default Meme;
