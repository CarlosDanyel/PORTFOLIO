  
import { useEffect, useState } from "react";
import Cursor from "./FrameMotion/Cursor";
import Scroll from "./FrameMotion/Scroll";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import Preloader from "./components/Preloader"; 
import ScrollTop from "./components/ScrollTop";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="app">
        <Preloader carregando={loading} />
          <Scroll />
          <ScrollTop/>
          <Cursor />
          <Cabecalho />
          <Outlet />
          <Rodape />
    </div>
  );
}

export default App;


