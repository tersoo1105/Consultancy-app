import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Aggregate from "./pages/Aggregate";
import Subjects from "./pages/Subjects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<Navigate to="/#updates" replace />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/aggregate" element={<Aggregate />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
