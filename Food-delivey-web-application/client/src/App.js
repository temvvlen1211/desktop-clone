import "./styles/index.css";

import { Route, Routes } from "react-router-dom";

// route elements

import Restaurants from "./pages/Restaurants";

import Home from "./pages/Home";

import RestaurantsCard from "./pages/RestaurantCard";
import Checkout from "./pages/Checkout";
import Navbar from "./components/unify/Navbar";
import { useContext } from "react";
import { BackgroundContext } from "./contexts/BackgroundProvider";
import Footer from "./components/unify/Footer";
import Contacts from "./pages/Contacts";
function App() {
  const { color } = useContext(BackgroundContext);
  return (
    <>
      <Navbar background={color} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/restaurants" element={<Restaurants />} />
        <Route exact path="/restaurantscard" element={<RestaurantsCard />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/contactus" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
