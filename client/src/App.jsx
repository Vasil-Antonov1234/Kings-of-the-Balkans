import { Route, Routes } from "react-router";
import Dogs from "./components/dogs/Dogs.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </>
  );
}

export default App