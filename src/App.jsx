import { useState } from "react";
import "./App.css";
import Generator from "./Components/Generator";
import Information from "./Components/Information";
import InputForm from "./Components/InputForm";

function App() {
  return (
    <>
      <main>
        <h1>Builder Generator</h1>
        <Information></Information>
        <Generator></Generator>
        <InputForm></InputForm>
      </main>
    </>
  );
}

export default App;
