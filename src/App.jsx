import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <Hero />
      <Slider onCartUpdate={setCartCount} />
    </div>
  );
}

export default App;
