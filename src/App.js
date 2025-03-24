import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import Loginpage from "./components/Login";
import CoursePage from "./components/CoursePage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/login" element={<Loginpage />} />
      </Routes>
  );
}

export default App;
