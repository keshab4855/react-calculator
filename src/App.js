import "./App.css";
import ButtonArea from "./components/ButtonArea";
import Display from "./components/Display";

function App() {
  return (
    <div class="container">
      <div class="wrapper">
        <Display></Display>
        <ButtonArea></ButtonArea>
      </div>
      <div class="circle"></div>
    </div>
  );
}

export default App;
