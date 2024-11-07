import "./App.css";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/HomePage.jsx";

import SelectRole from "./components/SelectRole.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DoctorSignup from "./components/DoctorSignup.jsx";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/select-role/login" element={<Login />} />
          <Route path="/select-role/sigup" element={<Signup />} />
          <Route path="/select-role/doctors" element={<DoctorSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
