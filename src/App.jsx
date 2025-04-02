import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/HomePage/HomePage";
import Catalog from "./pages/CatalogPage/CatalogPage";
import CarPage from "./pages/CarPage/CarPage";

import "./App.css";



const App = () => {
  return (
   
      <Layout>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CarPage />} />
         
        </Routes>
      </Layout>
    
  );
};

export default App;
