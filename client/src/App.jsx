import { Route, Routes } from "react-router";
import Dogs from "./components/dogs/Dogs.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

import styles from "./App.module.css";
import Footer from "./components/footer/Footer.jsx";
import DogMales from "./components/dog-males/DogMales.jsx";

function App() {

  return (
    <div className={styles["app"]}>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/males" element={<DogMales />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App