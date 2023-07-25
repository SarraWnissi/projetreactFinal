import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Destination from "./components/Destination";
import Gallery from "./components/Gallery";
import SignInPage from "./components/SignInPage";
import { Route, Router, Routes } from "react-router-dom";
import Annulation from "./components/Annulation";

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSignIn = (email, password) => {
    // Add your sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can handle authentication, store user data, etc.
  };

  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
    console.log("Sign in with Google");
  };

  const handleFacebookSignIn = () => {
    // Implement Facebook sign-in logic here
    console.log("Sign in with Facebook");
  };

  const [searchByName, setSearchByName] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");
  return (
    <div className="App">
      <Navbar
        setSearchByName={setSearchByName}
        setSearchByLocation={setSearchByLocation}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchByName={searchByName}
              searchByLocation={searchByLocation}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/destination/:id" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/annulation" element={<Annulation />} />
        <Route
          path="/SignInPage"
          element={
            <SignInPage
              handleSignIn={handleSignIn}
              handleGoogleSignIn={handleGoogleSignIn}
              handleFacebookSignIn={handleFacebookSignIn}
            />
          }
        />
      </Routes>
      {showSignIn && (
        <div className="overlay">
          <SignInPage
            handleSignIn={handleSignIn}
            handleGoogleSignIn={handleGoogleSignIn}
            handleFacebookSignIn={handleFacebookSignIn}
          />
        </div>
      )}
    </div>
  );
};

export default App;
