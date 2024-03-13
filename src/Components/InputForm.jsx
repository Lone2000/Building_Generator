import { useState } from "react";

import styles from "./InputForm.module.css";

function InputForm() {
  const [floor, setFloor] = useState();
  const [shape, setShape] = useState();

  const handleFloorChange = (e) => {
    setFloor(e.target.value);
  };

  const handleShapeChange = (e) => {
    setShape(e.target.value);
  };

  return (
    <>
      <form action="">
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
        <div className={styles.shapepicker}>
          <label htmlFor="shape">Pick a Shape</label>
          <select name="shape" id="shapepicker" onChange={handleShapeChange}>
            <option value="square">Square</option>
            <option value="square">Rectangle</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default InputForm;
