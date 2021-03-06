import "./App.css";
import ButtonArea from "./components/ButtonArea";
import Display from "./components/Display";
import { useState } from "react";
const operators = ["+", "-", "*", "/"];

function App() {
  const [str, setStr] = useState("");
  // state for last operator
  const [lastOperator, setLastOperator] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const handleOnClick = (value) => {
    // what we should do when we click on a specific button
    isPrank && setIsPrank(false);
    if (value === "AC") {
      setStr("");
      return;
    }
    if (value === "=") {
      return onTotal();
    }
    if (value === "C") {
      const temStr = str.slice(0, -1);
      return setStr(temStr);
    }
    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        // replace the operator with new one
        const strWithoutLastChar = str.slice(0, -1);
        setStr(strWithoutLastChar + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const positionOfLastOperator = str.lastIndexOf(lastOperator);
        const beforeLastOperator = str.slice(0, positionOfLastOperator + 1);
        const afterLastOperator = str.slice(positionOfLastOperator + 1);

        if (afterLastOperator.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
    }

    setStr(str + value);
  };

  const onTotal = () => {
    const prankVal = randomNumber();
    prankVal > 0 && setIsPrank(true);
    const ttl = eval(str) + prankVal;
    setStr(ttl.toFixed(2).toString());
  };

  const randomNumber = () => {
    const num = Math.ceil(Math.random() * 10);
    return num > 3 ? 0 : num;
  };
  return (
    <div class="container">
      <div class="wrapper">
        <Display str={str} isPrank={isPrank}></Display>
        <ButtonArea handleOnClick={handleOnClick}></ButtonArea>
      </div>
      <div class="circle"></div>
    </div>
  );
}

export default App;
