import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Modal from "./components/Modal";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Modal />
    </main>
  );
};

export default App;
