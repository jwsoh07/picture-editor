import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import DrawingArea from "./components/DrawingArea/DrawingArea";
import Layers from "./components/Layers/Layers";

function App() {
  return (
    <div className="drawing-app">
      <ToolBar />
      <DrawingArea />
      <Layers />
    </div>
  );
}

export default App;
