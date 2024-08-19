import "./App.css";
import Header from "./componentes/header/header";
import Main from "./componentes/main/main";
import Main2 from "./componentes/main/main2";
import Main3 from "./componentes/main/main3";
import Contactanos from "./componentes/main/contactanos";
import Footer from "./componentes/footer/footer";
import Error from "./paginas/404/error"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <body className="body">
      
    
      <Header />

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/nuestracompañia" element={<Main2/>} />
        <Route path="/nuestrosvalores" element={<Main3/>} />
        <Route path="/contactanos" element={<Contactanos/>} />


        <Route path="*" element={<Error/>} />
      </Routes>
      
      </body>
      <Footer />
    </>
  );
}

export default App;
