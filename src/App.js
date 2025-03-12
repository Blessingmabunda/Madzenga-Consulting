import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/module/user/auth"; 
// import Login from "./pages/public/login";
// import SignUp from "./pages/public/signup";
import LandingPAge from "./pages/public/landingPage";
import SplashPage from "./pages/public/splash";
import About from "./pages/public/about";
// import Skill from "./pages/private/SkillShowcase";
// import Table from "./pages/private/ManageMySkills";

const App = () => {
  return (
    <Provider store={store}>
      {/* Wrap the application in the Redux Provider */}
      <Router>
        <Routes>
          {/* Public Routes */}
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} /> */}
          <Route path="/LandingPAge" element={<LandingPAge />} />
          <Route path="/About" element={<About />} />
          <Route path="/" element={<SplashPage />} />
          {/* Private Routes */}
          {/* <Route path="/Home" element={<Home />} /> */}
          {/* <Route path="/Skill" element={<Skill />} /> */}
          {/* <Route path="/Table" element={<Table />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
