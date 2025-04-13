import styled from "styled-components";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import DrawingArea from "./components/DrawingArea/DrawingArea";
import { Layers } from "./components/Layers/Layers";

function App() {
  return (
    <Layout>
      <ToolBar />
      <Body>
        <ControlPanel />
        <CanvasPlaceholder>
          <DrawingArea />
        </CanvasPlaceholder>
        <Layers />
      </Body>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled.div`
  display: flex;
  flex: 1;
`;

const CanvasPlaceholder = styled.div`
  flex: 1;
  background: #eee;
`;

export default App;
