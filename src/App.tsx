import React from 'react';
import './App.scss';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {BasketPage} from "./pages/busket/BasketPage";
import {CatalogPage} from "./pages/catalog/CatalogPage";

function App() {
  return (
      <div className="app">
          <Router>
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route path="basket" element={<BasketPage />} />
                      <Route path="catalog" element={<CatalogPage />} />
                  </Route>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
