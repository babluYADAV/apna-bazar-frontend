import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/common/header";
import Dashboard from "../components/dashboard";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function Routing() {
  var user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      {user?.user?.data?.token && <Header  user={user?.user?.data}/>}
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {!user?.user?.data?.token && (
          <Route path="/signIn" element={<SignIn />} />
        )}
        {!user?.user?.data?.token && (
          <Route path="/signUp" element={<SignUp />} />
        )}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default Routing;
