import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter, routes, route } from "react-router-dom";


//pages

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <routes>
          <route path="/" element={<Home />} />
          <route path="." element={<About />} />
          <route path="/" element={<Contact />} />
        </routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
