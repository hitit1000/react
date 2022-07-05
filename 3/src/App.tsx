import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import EmptyPage from "./component/EmptyPage";
import Estimate from "./component/Estimate";
import EstimateTable from "./component/EstimateTable";
import TableTemplate from "./component/TableTemplate";
import Etc from "./component/Etc";
import Header from "./component/Header";
import Home from "./component/Home";
import Product from "./component/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<EmptyPage />} />
          <Route path="/Estimate" element={<EstimateTable />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Etc" element={<Etc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
