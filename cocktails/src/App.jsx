import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleCocktail from "./pages/SingleCocktail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
