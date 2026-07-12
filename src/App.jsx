import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from './pages/Register';

function App() {
  // Pindahkan state bahasa ke komponen paling atas
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Kirim state dan fungsinya ke Navbar */}
        <Navbar language={language} setLanguage={setLanguage} />

        <main className="flex-grow">
          <Routes>
            {/* Kirim state bahasanya ke Home */}
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/register" element={<Register language={language} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
