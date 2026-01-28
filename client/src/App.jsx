import { Route, Routes } from "react-router";
import Dogs from "./components/dogs/Dogs.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

import styles from "./App.module.css";
import Footer from "./components/footer/Footer.jsx";
import DogDetails from "./components/dogs/dog-details/DogDetails.jsx";
import Details from "./components/details/Details.jsx";
import UploadPicture from "./components/upload-picture/UploadPicture.jsx";

function App() {

  return (
    <div className={styles["app"]}>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/males" element={<DogDetails dogs={"males"}/>} />
        <Route path="/dogs/females" element={<DogDetails dogs={"females"} />}/>
        <Route path="/dogs/puppies" element={<DogDetails dogs={"puppies"}/>}/>
        <Route path="/dogs/:dogId/details" element={<Details />} />
        <Route path="/pictures/upload-picture" element={<UploadPicture />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App