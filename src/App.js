import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Heros from "./pages/Heros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Heros />
              <Footer />
            </>
          }
        />

        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
