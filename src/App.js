import "./App.css";
import ButtonArea from "./components/ButtonArea";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [str, setStr] = useState("");

  const handleOnClick = (value) => {
    setStr(str + value);
  };
  return (
    <div class="container">
      <div class="wrapper">
        <Display str={str}></Display>
        <ButtonArea handleOnClick={handleOnClick}></ButtonArea>
      </div>
      <div class="circle"></div>
    </div>
  );
}

export default App;
