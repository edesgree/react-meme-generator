export default function Form() {
  return (
    <form>
      <div className="field-group">
        <div className="field">
          <label className="label">First line</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="firstLine"
              placeholder="Text input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Second line</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="secondLine"
              placeholder="Text input"
            />
          </div>
        </div>
      </div>
      <div className="field">
        <button type="submit">Get a new meme image</button>
      </div>
    </form>
  );
}
