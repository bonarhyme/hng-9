import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Home, Contact } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
