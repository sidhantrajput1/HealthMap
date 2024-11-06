import "./App.css";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Home from "./components/HomePage.jsx";
import Layout  from "./components/Layout.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<Layout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
