import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import CarPage from "./pages/CarPage/CarPage";

import { Toaster } from 'react-hot-toast';

import "./App.css";



const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarPage />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default App;
