import './App.css';
import RegistrationForm from './main/RegistrationForm';
import ThankyouPage from './main/ThankyouPage';
import AlumniForm from './main/AlumniForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDonateForm from './main/studentDonateForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/alumni-form" element={<AlumniForm />} />
        <Route path="/student-donate-form" element={<StudentDonateForm />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
