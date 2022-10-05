import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import fireBaseConfig from "./FireBase/FireConfig";

//Components
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CardContext from "./Context/CartContext";
import Filter from "./components/Filter/Filter";

//pages
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Card from "./Pages/Card/Card";

const App = () => {
  return (
    <CardContext>
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
    </CardContext>
  );
};

export default App;
