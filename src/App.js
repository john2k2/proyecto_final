import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Context from "./context/CartContext";
import Filter from "./components/filter/Filter";

//pages
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Card from "./Pages/Card/Card";

const App = () => {
  return (
    <Context>
      <Router>
        <div>
          <Navbar />
          <Filter />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Card />} />
            <Route path="/ropa/:filterid" element={<ItemListContainer />} />
          </Routes>
        </div>
      </Router>
    </Context>
  );
};

export default App;
