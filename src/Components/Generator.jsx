import styles from "./Generator.module.css";

function Generator({ floor, shape }) {
  const calculateWidth = (shape) => {
    return shape === "square" ? "500px" : "250px";
  };
  console.log(typeof floor);
  const calculateHeight = (floor) => {
    return String(floor * 50) + "px";
  };

  const style = {
    width: calculateWidth(shape),
    height: calculateHeight(parseInt(floor)),
    backgroundColor: "#aaa",
    position: "relative",
  };

  return (
    <>
      <h2>Building View</h2>
      <div className={styles.building_container}>
        <div style={style}></div>
      </div>
    </>
  );
}

export default Generator;
