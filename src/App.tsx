import styled from "styled-components";
import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import DrawingArea from "./components/DrawingArea/DrawingArea";
import { Layers } from "./components/Layers/Layers";

function App() {
  return (
    <Layout>
      <Body>
        <ControlPanel />
        <Main>
          <ToolBar />
          <DrawingArea />
        </Main>
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #eee;
`;

export default App;
