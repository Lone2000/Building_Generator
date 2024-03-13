import styles from "./Generator.module.css";

function Generator({ floor, shape, window }) {
  // Create an array with 'floor' number of elements
  const divs = Array.from({ length: floor }, (_, index) => index + 1);

  let window_style = {};
  let window_container_style = {};

  const calculateWidth = (shape) => {
    return shape === "square" ? "500px" : "250px";
  };
  console.log(typeof floor);
  const calculateHeight = (floor) => {
    return String(floor * 50) + "px";
  };

  let shape_style = {
    width: calculateWidth(shape),
    height: calculateHeight(parseInt(floor)),
    backgroundColor: "#aaa",
    position: "relative",
  };

  const getWindowContainerStyle = (window) => {
    // Even (Rectangle)
    if (parseInt(window) % 2 == 0) {
      window_container_style = {
        marginTop: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        justifyItems: "center",
      };

      return window_container_style;
    }

    // Odd
  };

  const getWindowStyle = (window) => {
    // Even
    if (parseInt(window) % 2 == 0) {
      let shape_width = shape_style["width"];
      let shape_height = shape_style["height"];

      // Intended to only attain integer values [Search Index]
      let findW_p = shape_width.indexOf("p");
      let findH_p = shape_height.indexOf("p");

      // .slice used to get int value and parsedInt To carry out calculation
      window_style = {
        width: String(parseInt(shape_width.slice(0, findW_p)) / window) + "px",
        height:
          String(parseInt(shape_height.slice(0, findH_p)) / window) + "px",
        backgroundColor: "white",
      };
      return window_style;
    }

    // Odd
  };

  return (
    <>
      <h2>Building View</h2>
      <div className={styles.building_container}>
        <div style={shape_style}>
          <div style={getWindowContainerStyle(window)}>
            {/* Map over the array to create div elements */}
            {divs.map((num) => (
              <div key={num} style={getWindowStyle(window)}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Generator;
