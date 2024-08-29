//import { useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Button
        children="Optimized"
        color="success"
        onClick={() => console.log("Optimized choice selected!")}
      ></Button>
      <Button
        children="Chaos"
        color="danger"
        onClick={() => console.log("Chaos choice selected!")}
      ></Button>
    </>
  );
}

export default App;
