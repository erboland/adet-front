import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Header from "./components/header.component";
import MainTable from "./pages/mainTable";
import NewCourse from "./pages/newCourse";
import MyCourses from "./pages/myCourses";
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header logged={signedIn} logOut={() => setSignedIn(false)} />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login login={setSignedIn} />} />
          <Route path="/sign-up" element={<SignUp login={setSignedIn} />} />
          <Route exact path="/rating" element={<MainTable />} />
          <Route exact path="/new-course" element={<NewCourse />} />
          <Route exact path="/courses" element={<MyCourses />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
