import { useState } from "react";

import styles from "./InputForm.module.css";
import Generator from "./Generator";

function InputForm() {
  const [floor, setFloor] = useState();
  const [shape, setShape] = useState("");
  const [window, setWindow] = useState();

  const [submitted, setSubmitted] = useState(false);

  const handleFloorChange = (e) => {
    setFloor(parseInt(e.target.value));
  };
  const handleWindowChange = (e) => {
    setWindow(parseInt(e.target.value));
  };

  const handleShapeChange = (e) => {
    setShape(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Pass the Shape and Floor Information to the Generator
    setFloor(e.target[0].value);
    setShape(e.target[1].value);
    setWindow(e.target[2].value);
    setSubmitted(true);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* Slider Picker */}
        <div className={styles.slidecontainer}>
          <label htmlFor="build_floors">{floor} Floors</label>
          <input
            type="range"
            min="2"
            max="10"
            name="build_floors"
            id="build_floors"
            className={styles.slider}
            onChange={handleFloorChange}
          />
        </div>
        {/* Shape Picker */}
        <div className={styles.shapepicker}>
          <label htmlFor="shape">Pick a Shape</label>
          <select name="shape" id="shapepicker" onChange={handleShapeChange}>
            <option value="square">Square</option>
            <option value="rectangle">Rectangle</option>
          </select>
        </div>
        {/* Number of Windows Picker */}
        <div className={styles.slidecontainer}>
          <label htmlFor="windows">{window} Windows</label>
          <input
            type="range"
            min="2"
            max="10"
            name="windows"
            id="windows"
            className={styles.slider}
            onChange={handleWindowChange}
          />
        </div>

        <button type="submit">Generate</button>
      </form>
      {submitted && (
        <Generator floor={floor} shape={shape} window={window}></Generator>
      )}
    </>
  );
}

export default InputForm;
