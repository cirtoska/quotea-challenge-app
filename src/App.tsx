import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import QuoteList from "./pages/qute-list/QuoteList";
import RandomQuote from "./pages/random-quote/RandomQuote";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<QuoteList />} />
        <Route path="/random-quotes" element={<RandomQuote />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
