import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
