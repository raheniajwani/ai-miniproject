import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import {JuniorDoctorRoom} from './pages/JuniorDoctorRoom';
import {SeniorDoctorRoom} from './pages/SeniorDoctorRoom';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/room1" element={<JuniorDoctorRoom />} />
        <Route path="/dashboard/room2" element={<SeniorDoctorRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
