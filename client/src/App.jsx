import { Route, Routes } from "react-router";
import Dogs from "./components/dogs/Dogs.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";

import styles from "./App.module.css";
import Footer from "./components/footer/Footer.jsx";
import DogDetails from "./components/dogs/dog-details/DogDetails.jsx";
import Details from "./components/details/Details.jsx";
import UploadPicture from "./components/upload-picture/UploadPicture.jsx";
import Success from "./components/upload-picture/Success.jsx";
import AttachPicture from "./components/upload-picture/AttachPicture.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

// import { useEffect } from "react";
// import { signInAnonymously } from "firebase/auth";
// import { auth } from "../firebase.js";
import UnderConstruction from "./components/under-construction/UnderConstruction.jsx";
import Story from "./components/story/Story.jsx";
import Login from "./components/login/Login.jsx";
import IsGuest from "./components/route-guards/IsGuest.jsx";
import IsAuthenticated from "./components/route-guards/IsAuthenticated.jsx";
import Logout from "./components/logout/Logout.jsx";
import Create from "./components/create/Create.jsx";


function App() {
    console.log(import.meta.env.VITE_APP_SERVER_URL)

    // useEffect(() => {
    //     signInAnonymously(auth).catch(error => console.error("Sign-in failed", error));
    // }, []);

    return (
        <div className={styles["app"]}>

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dogs" element={<Dogs />} />
                <Route path="/dogs/males" element={<DogDetails dogs={"males"} />} />
                <Route path="/dogs/females" element={<DogDetails dogs={"females"} />} />
                <Route path="/dogs/puppies" element={<DogDetails dogs={"puppies"} />} />
                <Route path="/dogs/:dogId/details" element={<Details />} />

                <Route element={<IsGuest />}>
                    <Route path="/pictures/upload-picture" element={<UploadPicture />} />
                    <Route path="/pictures/:dogId/attach-picture" element={<AttachPicture />} />
                    <Route path="/pictures/uploaded-success" element={<Success />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/dogs/create" element={<Create />} />
                </Route>

                <Route path="/contacts" element={<Contacts />} />
                <Route path="/story" element={<Story />} />
                <Route path="/about" element={<UnderConstruction />} />

                <Route element={<IsAuthenticated />} >
                    <Route path="/admin/login" element={<Login />} />
                </Route>
            </Routes>

            <Footer />
        </div>
    );
}

export default App