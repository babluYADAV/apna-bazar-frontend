import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import Dashboard from "../components/dashboard";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Routing() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default Routing;
