import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Form from "./components/Form/Form";
import ItemListContainer from "./components/ItemListContainer/ItemListCointainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//pages
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Card from "./Pages/Card/Card";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Form />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
