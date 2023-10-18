
import { Outlet } from "react-router-dom";

import Cursor from "./FrameMotion/Cursor";
import Scroll from "./FrameMotion/Scroll";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Preloader from "./components/Preloader";
import ScrollTop from "./components/ScrollTop";

function App() {

  return (
    <div className="app">
      <Preloader/>
      <Scroll />
      <ScrollTop />
      <Cursor />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </div>
  );
}

export default App;


