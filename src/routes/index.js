import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

function Routing() {
  return (
    <Router>
      <Header title="Apna Bazar" />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routing;
