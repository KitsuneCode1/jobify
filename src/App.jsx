import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import MainContent from "./Dashboard/MainContent.jsx";
import Messages from "./Dashboard/Pages/Messages.jsx";
import MyJobs from "./Dashboard/Pages/MyJobs.jsx";
import Membership from "./Dashboard/Pages/Membership.jsx";
import AccountSettings from "./Dashboard/Pages/AccountSettings.jsx";
import SavedCandidate from "./Dashboard/Pages/SavedCandidate.jsx";
import SubmitJob from "./Dashboard/Pages/SubmitJob.jsx";
import MyProfile from "./Dashboard/Pages/MyProfile.jsx";

function App() {
  return (
    <>
      <Router basename="/jobify/">
        <Routes>
          <Route path="/" element={<Dashboard />} >
            <Route index element={<MainContent />} />
            <Route path="Pages/Messages" element={<Messages />}></Route>
            <Route path="Pages/MyJobs" element={<MyJobs />}></Route>
            <Route path="Pages/AccountSettings" element={<AccountSettings />}></Route>
            <Route path="Pages/SavedCandidate" element={<SavedCandidate />}></Route>
            <Route path="Pages/SubmitJob" element={<SubmitJob />}></Route>
            <Route path="Pages/MyProfile" element={<MyProfile />}></Route>
            <Route path="Pages/Membership" element={<Membership />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
