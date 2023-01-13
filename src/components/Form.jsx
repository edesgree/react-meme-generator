export default function Form() {
  return (
    <form>
      <input
        className="input"
        type="text"
        name="firstLine"
        placeholder="First text"
      />
      <input
        className="input"
        type="text"
        name="secondLine"
        placeholder="Second text"
      />
      <button type="submit">Get a new meme image</button>
    </form>
  );
}
